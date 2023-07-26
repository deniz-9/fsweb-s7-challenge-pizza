describe('Pizza Siparişi', () => {
    it('Anasayfa yüklendi.', () => {
        // Ana sayfayı aç
        cy.visit('http://localhost:3000/');
    });


    it('Acıktım Butonu', () => {
        // Butonu Bul
        cy.visit('http://localhost:3000/');
        cy.visit('http://localhost:3000/pizza');
    });

    it('Form Elemanları', () => {
        cy.visit('http://localhost:3000/pizza');
        


    })

    it('Sipariş Sayfası', () => {
        // Sipariş Sayfası

        cy.visit('http://localhost:3000/pizza');
        cy.visit('http://localhost:3000/success');

    });


    //   // Form elemanlarını seç ve değerlerini gir

    //  // cy.get('[data-cy="hamur"]').select('İnce'); 
    //     cy.get('[data-cy="ektramalzemeler"]').check(['Pepperoni', 'Mantar'])

    //   // Hamur tipini seç
    //   cy.get('[data-cy="pizza-boyutu"]').select('orta'); // Pizza boyutunu seç
    //  ; // Ek malzemeleri seç
    //   cy.get('[data-cy="adet"]').type('2'); // Kaç adet pizza siparişi verileceğini gir

    //   // Sipariş notunu gir
    //   cy.get('[data-cy="siparis-notu"]').type('Lütfen acı sos eklemeyin.');

    //   // Sipariş ver butonuna tıkla
    //   cy.get('[data-cy="siparis-ver"]').click();

    //   // Siparişin başarıyla alındığına dair teyit mesajını kontrol et
    //   cy.get('[data-cy="teyit-mesaji"]').should('contain', 'Siparişiniz alınmıştır. Teşekkür ederiz!');

});