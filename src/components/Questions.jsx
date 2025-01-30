import React, { useState } from 'react'
import '../assets/styles/question.scss'
import { FaChevronDown } from "react-icons/fa";


const Questions = () => {
  const questions = [
    {
        question: "Kimler kan bağışında bulunabilir?",
        answer: "18-65 yaş aralığında, 50 kilogramın üzerindeki sağlıklı bireyler kan bağışçısı olabilir. İlk bağış için üst yaş sınırı 61'dir."
    },
    {
        question: "Hangi aralıklarla kan bağışında bulunabilirim?",
        answer: "Erkekler 90 günde bir, kadınlar ise 120 günde bir tam kan bağışında bulunabilir."
    },
    {
        question: "İlaç kullananlar kan bağışında bulunabilir mi?",
        answer: "Bazı ilaçlar bağışa engel olabilir; her ilacın kullanım durumu için bağış öncesinde sağlık kontrolü yapılır."
    },
    {
        question: "Kan vermenin sağlığa yararı var mıdır?",
        answer: "Kan bağışının tıbbi olarak kanıtlanmış bir yararı veya zararı bulunmamaktadır, ancak kan bağışı 3 kişiye yaşam umudu sağlar."
    },
    {
        question: "Kan bağışı yapmak acı verir mi?",
        answer: "Kan bağışı sırasında hafif bir iğne acısı hissedilebilir ancak işlem kısa sürer ve son derece güvenlidir."
    },
    {
        question: "Kan bağışı sonrası nelere dikkat edilmelidir?",
        answer: "Bol sıvı tüketmek, ağır fiziksel aktivitelerden kaçınmak önerilir. Baş dönmesi olursa dinlenmek faydalıdır."
    },
    {
        question: "Kan bağışı ne kadar sürer?",
        answer: "Kan alma işlemi yaklaşık 10-15 dakika sürer; toplamda kayıt ve dinlenme ile birlikte 30-45 dakikadır."
    },
    {
        question: "Kan bağışının belirli bir mevsimi var mı?",
        answer: "Kan bağışı her mevsim yapılabilir, ancak kış ve yaz aylarında bağışa daha fazla ihtiyaç duyulabilir."
    },
    {
        question: "Bağışlanan kan nasıl kullanılıyor?",
        answer: "Bağışlanan kan, hastanelerde kan ihtiyacı olan hastalar için kullanılmak üzere uygun koşullarda saklanır ve işlenir."
    },
    {
        question: "Kan bağışının sık yapıldığı bir bölgeye etkisi var mı?",
        answer: "Hayır, sık kan bağışının uzun vadeli herhangi bir yan etkisi yoktur, ancak doktor önerisine uymak önemlidir."
    },
    {
        question: "Hangi kan gruplarına daha çok ihtiyaç var?",
        answer: "Tüm kan gruplarına ihtiyaç vardır, ancak nadir bulunan AB(-) gibi gruplara olan ihtiyaç daha fazladır."
    },
    {
        question: "Kan bağışının riskleri var mı?",
        answer: "Kan bağışının genel bir riski yoktur; bağış öncesinde tüm sağlık kontrolleri yapılır."
    },
    {
        question: "Kan bağışında ne kadar kan alınıyor?",
        answer: "Bir seferde yaklaşık 450 ml kan alınır, bu miktar sağlığınızı olumsuz etkilemez."
    },
    {
        question: "Kan bağışı neden önemlidir?",
        answer: "Kan bağışı, tedavi sürecinde kan ihtiyacı olan birçok hasta için hayati önem taşır."
    },
    {
        question: "Kan bağışından önce yemek yemeli miyim?",
        answer: "Evet, kan bağışından önce hafif bir öğün tüketmek önerilir. Açken kan bağışı yapılmamalıdır."
    },
    {
        question: "Düzenli kan bağışı bağışıklığımı etkiler mi?",
        answer: "Kan bağışı bağışıklığınızı etkilemez; vücudunuz hızlıca eksilen kan hücrelerini yeniler."
    },
    {
        question: "Kadınlar regl döneminde kan bağışı yapabilir mi?",
        answer: "Kadınların regl döneminde kan bağışı yapmaları önerilmez; bu dönemde vücut ekstra kan kaybetmektedir."
    },
    {
        question: "Kan bağışı kaç yaşına kadar yapılabilir?",
        answer: "Düzenli bağışçılar 65 yaşına kadar kan verebilir, ancak bağış öncesi doktor onayı gereklidir."
    },
    {
        question: "Kan bağışı yaparken kimlik gerekli mi?",
        answer: "Evet, kan bağışında bulunurken kimlik ibrazı zorunludur."
    },
    {
        question: "Kan bağışı için randevu almak gerekir mi?",
        answer: "Randevu almak zorunlu değildir, ancak yoğun dönemlerde randevu almak işleminizi hızlandırabilir."
    }
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Aynı soruya tıklanırsa kapatır, farklı soruya tıklanırsa o soruyu açar
  };
  // return (

  //   <div className="accordion" id="questionsAccordion">
  //     {questions.map((item, index) => (
  //       <div className="accordion-item" key={index}>
  //         <h2 className="accordion-header" id={`heading${index}`}>
  //           <button onClick={toogleAccordion}
  //             className="accordion-button"
  //             type="button"
  //             data-bs-toggle="collapse"
  //             data-bs-target={`#collapse${index}`}
  //             aria-expanded={index === 0}
  //             aria-controls={`collapse${index}`}
  //           >
  //             {item.question}
  //           </button>
  //         </h2>
  //         {Open &&
  //           <div
  //             id={`collapse${index}`}
  //             className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
  //             aria-labelledby={`heading${index}`}
  //             data-bs-parent="#questionsAccordion"
  //           >
  //             <div className="accordion-body">
  //               {item.answer}
  //             </div>
  //           </div>
  //         }

  //       </div>
  //     ))}
  //   </div>

  // )
  return (
    <div className="accordion" id="questionsAccordion">
      {questions.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button onClick={() => toggleAccordion(index)} className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}  type="button"
              // aria-expanded={activeIndex === index}
              // aria-controls={`collapse${index}`}
            >{item.question}<FaChevronDown className='icon'/></button>
          </h2>
          {activeIndex === index && (
            <div id={`collapse${index}`} className="accordion-collapse collapse show" >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Questions