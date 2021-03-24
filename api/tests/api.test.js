const app = require('../src/app');
const request = require('supertest');

describe('Sample Test', () => {

  it('App is defined', () => {
    expect(app).toBeDefined();
  })

  it("It should response the GET method", () => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  it('Messages', () => {
    request(app).get('/messages').then((response)=>{
      expect(response.statusCode).toBe(200);
      expect(response.body[0].message).toBe('message 1');
      expect(response.body[1].message).toBe('message 2');
      // console.log(response.body[0]); 
    });
  })
  
  it('Post message', async () => {

    const message = {message: 'Fazendo testes'}

    const res = await request(app).post('/message').send(message)
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe(message.message);

  })

  it('Post message error', async () => {

    const message = {}

    const res = await request(app).post('/message').send(message)
    expect(res.statusCode).toBe(500);
    console.log(res.body.err);
    expect(res.body.err).toBe('No menssage sent');
    
  })

})