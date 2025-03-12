it('Equality',() =>{
    const a =1;
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
})

it ('São verdadeiros ou não',()=>{
    const a = true;
    const b = null;
    let c;
    expect(a).to.be.equal(true);
    expect(a).not.to.be.equal(null);
    expect(c).to.be.undefined;
})

it ('Objetos iguais',()=>{
    const obj ={
        a:1,
        b:2
    }
    expect(obj).to.be.deep.equal({a:1,b:2})
    expect(obj).eql({a:1,b:2})
    expect(obj).include({a:1}) //possui a propriendade a:1
    expect(obj).to.have.property('b',2) //possui a propriedade b e 2
    expect(obj).to.not.have.be.empty //não pode estar vazio
})

it('Arrays, verifica os arrays',()=>{
    const array = [1,2,3]
    expect(array).to.have.members([1,2,3]) //Verifica se tem todos os membros
    expect(array).to.include.members([1,3]) //Verifica se tem alguns, se contém alguns membros
    expect([]).to.be.empty
})
it('Types, verifica os tipos de variáveis',()=>{
    const num =1
    const string = 'String'
    expect(num).to.be.a('number')
    expect(string).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})
it('String',()=>{
    const str = 'String de teste'
    expect(str).to.be.equal('String de teste') //verifica se o texto é igual
    expect(str).to.have.length(15)  //verifica a quantidade de letras
    expect(str).to.contains('de') //contém de
    expect(str).to.match(/de/)
    expect(str).to.match(/de/) //contem 'de'
    expect(str).to.match(/^String/) //termina com a palavra teste(^esse é o simbolo do começo e $ do final)
    expect(str).to.match(/teste$/) //termina com a palavra teste(^esse é o simbolo do começo e $ do final)
    expect(str).to.match(/.{15}/)  //outra forma de validar quantidade de caracteres
    expect(str).to.match(/\w+/) //verifica se só tem letras
    expect(str).to.match(/\D+/) //verifica se não contém números
})

it('Números',()=>{
    const number =4
    const floatNumber = 5.2123
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) //above = acima- verifica se o number é acima de 3
    expect(number).to.be.below(7) //below = abaixo - verifica se o number está abaixo de 7
    expect(floatNumber).to.be.closeTo(5.2, 0.1)

})