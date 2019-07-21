import supertest from 'supertest';
const request = supertest('http://apps.appstiperu.com');

describe('urlgetcontacto', () => {
    describe('GET', () => {
        it('Return code 200 if the connection was successful and get the data', (done) => {
            request.get('/contactos').expect(200, done);
        });
    });
});

describe('urlpostcontacto', () => {
    describe('POST', () => {
        it('Return code 201 if it saves the data', (done) => {

            let contacto = {
                "names": "Juan",
                "lastnames": "Perez",
                "email": "juanperez@gmail.com",
                "fono": "999999999"
            }

            request.post('/newcontactos').send(contacto).expect(201, done);
        });
    });
});