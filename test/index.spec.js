const chai = require('chai');
const atbash = require('../index');

describe('index.js tests', () => {
  it("Should decrypt 'knlfgnb, sj koqj o yvnewju'", () => {
    const decryptedString = atbash('knlfgnb, sj koqj o yvnewju');
    chai.expect(decryptedString).to.be.equal('houston, we have a problem');
  });

  it("Should encrypt 'houston, we have a problem' back", function() {
    const encryptedString = atbash('houston, we have a problem', true);
    chai.expect(encryptedString).to.be.equal('knlfgnb, sj koqj o yvnewju');
  });

  it("Should ecrypt with capital letters in the string 'Houston, We hAve a Problem'", () => {
    const encryptedString = atbash('Houston, We hAve a Problem', true);
    chai.expect(encryptedString).to.be.equal('knlfgnb, sj koqj o yvnewju');
  });

  it("Should decrypt with capital letters in the string 'kNlFgnb, Sj kOqj o Yvnewju'", () => {
    const decryptedString = atbash('kNlFgnb, Sj kOqj o Yvnewju');
    chai.expect(decryptedString).to.be.equal('houston, we have a problem');
  });
});
