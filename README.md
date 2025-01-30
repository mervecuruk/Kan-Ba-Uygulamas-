# Proje Adı: Kan Bağışı Uygulaması
__*Admin, bağışçı bilgilerini ekleyebilir, güncelleyebilir ve silebilir. Bağış geçmişini 
takip ederek bağışçıların önceki kan verme kayıtlarını görüntüleyebilir. Kimlik 
doğrulama ile giriş yaparak sisteme erişim sağlayabilir. *__

**Proje Amacı:** Kan bağışı yapılan kişilerin bilgilerini toplamak, aramak ve bu bilgileri güncellemek, eklemek veya silmek amacıyla bir yönetim sistemi geliştirmek. Bu kan bağışı uygulamasında düzenli kan veren kişilerin bilgilerinin kayıtlı olması sayesinde herhangi bir kan ihtiyacı
olan kişi için kayıtlı olan bilgilerden o kişiye ulaşarak tekrar bir kan desteği talep etmektir.

**Proje İçeriği:**

__*Anasayfa*__:

       --> Bağışçı için Menü( SSS, tüm bağış yaptığı bilgiler, giriş yap/çıkıp yap butonu, hakkımızda)
        --> Personel için Menü(SSS, Hakkımızda, Bağışçı ekleme, tüm bağışçılar, giriş yap/çıkış yap butonu, opsiyonel:düzenli
            bağış yapanların listesi)

__*SSS*__:
      -->Kan bağışı hakkında tüm soruların ve cevaplarının olduğu sayfadır.

      
__*Personel için bağışçı ekleme sayfası*__:
    
        --> Bağışçı adı, soyadı, yaşadığı yer, kan grubu, yaşı, e-posta, telefon, doğum tarihi, herhangi bir hastalığı olup olmadığı bilgileri vs. kısımları olacak
    Personel için tüm bağışçıların listelendiği sayfa:
    
        --> Bir card yapısında bağışçının resmi, kan grubu, yaşı bilgisi gözükecek. Altında da detay görüntüle butonu olacak.
        
__*Personel için bağışçı detay sayfası*__:
    
        --> Bağışçı bilgileri, yaptığı bağışlar listelenecek. Altında ise güncelle ve sil butonları olacak. Sil butonuna basıldığında direkt sistemden o bağışçı silinecek.
 __* Personel için bağışçı güncelleme sayfası*__:
   
        --> Bağışçının tüm bilgileri gerekli kutucuklarda olacak. Değiştirilmek istenilen yerler değiştirilip güncelleme işlemi yapılacak.
 __* Personel için opsiyonel sayfa*__:
   
        --> Düzenli bağış yapanların listesi(card yapısında olacak)

__*Kullanılan Teknolojiler*__

**Frontend:** React.js, React Router Dom, Context API, useReducer, Sass (SCSS), 
Axios, React Toastify, SweetAlert, React Events, useState, useEffect, Conditional 
Rendering 

**Backend (Simüle Edilen):** JSON Server (Fake API), RESTful API 
Veri Yönetimi: Dataset.js, useState, Prop Drilling, Context API 

**Auth & Güvenlik:** Login Sistemi, Local Storage

**Diğer:** Excalidraw, Vite, Loading Pages


# Projeyi Klonlama:

Projenizi GitHub'dan bilgisayarınıza çekmek için şu komutu kullanabilirsiniz:

    git clone https://github.com/kullaniciadi/proje-dizini.git
    cd proje-dizini


# Npm yükleme:

    npm install


# Projede Api kısmı da mevcuttur (Fake API), RESTful API:

__*Bu sebeple projede iki farklı terminalde ayrı ayrı olarak bu kodları yazıp çalıştırmanız gerekiyor verilerin yüklenebilmesi için:*__

**1.Terminal'de**

    npm run dev

**2. Terminal'de**

    npm run api




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
