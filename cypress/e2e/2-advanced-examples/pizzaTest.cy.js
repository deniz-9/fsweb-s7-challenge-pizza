// Giriş sayfasında butonu bul

describe("Giriş Sayfası", () => {
    it("Acıktım Butonu Sayfada Görünüyor Mu?", () => {
      cy.visit("http://localhost:3000/");
      cy.contains("Acıktım").should("exist");
    });
  });

  

describe("Siparişi Gönder", () => {
    it("Sipariş Butonu Sayfada Görünüyor Mu?", () => {
      cy.visit("http://localhost:3000/order-pizza");
      cy.contains("SİPARİŞİ GÖNDER").should("be.visible");
    });
  });
  
  // Form elemanlarını seç ve değerlerini gir

  describe("Form Testi", () => {
    it("Form  Gönderiliyor Mu?", () => {
      cy.visit("http://localhost:3000/order-pizza");
  
      cy.get('select[name="pizzatype"]').select("Margarita"); // pizzayı seç
      cy.get('[type="radio"]').check();
  
      cy.get('[type="checkbox"]').check(); // hamur tipini gir
  
      cy.get('input[name="namesurname"]').type("Deniz Demir"); // isim gir
  
      cy.get('input[name="address"]').type("xxxxxxxxxxxxxxxxxxxxx"); 
      cy.get('input[name="email"]').type("xxx@email.com");
      cy.get('input[name="quantity"]'); // kaç adet pizza siparişi verileceğini gir
  
      cy.get('input[name="ordernote"]').type("Lütfen acı sos eklemeyin."); // not gir
  
      cy.get('button[type="submit"]').click(); // sipariş ver butonuna tıkla
    });
  });

  describe("Success Sayfası ", () => {
    it("Anasayfaya Dön Butonu Sayfada Görünüyor Mu?", () => {  // success sayfası buton kontrolü
      cy.visit("http://localhost:3000/success");
      cy.contains("ANASAYFAYA DÖN").should("exist");
    });
  });


  describe("Anasayfaya Dön Testi ", () => {  // anasayfaya  dönüş kontrolü
    it("Anasayfaya  Dönülüyor mu ?", () => {
      cy.visit("http://localhost:3000/success");
      cy.get('.secondButton').click();
      
    });
  });
