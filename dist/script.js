const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
if(menu&&nav){menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'Đóng':'Menu'}}

const contactForm=document.querySelector('.contact-form');
if(contactForm){
  const endpoint=contactForm.dataset.endpoint,button=contactForm.querySelector('button[type="submit"]'),note=contactForm.querySelector('[data-form-note]');
  contactForm.addEventListener('submit',async(event)=>{
    event.preventDefault();
    if(!contactForm.reportValidity()||!endpoint)return;
    const originalLabel=button.textContent;
    button.disabled=true;button.textContent='ĐANG GỬI…';note.textContent='Đang gửi yêu cầu của bạn…';
    try{
      const data=Object.fromEntries(new FormData(contactForm).entries());
      await fetch(endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(data)});
      contactForm.reset();note.textContent='Cảm ơn bạn. Linhstay đã nhận được yêu cầu và sẽ phản hồi sớm.';
    }catch(error){note.textContent='Chưa thể gửi ngay lúc này. Bạn hãy thử lại hoặc liên hệ Linhstay qua kênh khác.'}
    finally{button.disabled=false;button.textContent=originalLabel}
  });
}

