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

})