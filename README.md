# Scenify 

Scenarios definition for testing purposes.

## First steps

#### Installing

Simply run:

> npm i scenify

#### Define a scenario

```js
scenify.define('Create default user', params => User.create(params));
```

#### Perform a scenario

```js
describe('Test authorization', () => {
    it("should access into route succesfully", done => {
      userScenarios.perform('Create default user').then(user => {
        const hash = authenticate(user.email);
        chai
          .request(server)
          .get('/restricted_route')
          .set('authorization', hash)
          .send()
          .then(res => {
            res.should.have.status(200);
            res.should.be.json;

            res.body.message.should.be.equal('Welcome!'); // TODO
          })
          .then(() => done())
          .catch(err => done(err));
      });
    });
});
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## About

This project is maintained by [Emanuel Casco](https://github.com/emanuelcasco).

## License

**express-js-bootstrap** is available under the MIT [license](LICENSE.md).

    Copyright (c) 2018 Emanuel Casco

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
