<template lang="pug">
.call-button 
    a(href="tel:+79188208097")
        img(src="~/assets/images/phone.svg")
</template>
    
    
    
<style lang="css" scoped>
   .call-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: none;
}

.call-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #25d366, #128C7E);
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  border: 3px solid white;
}

.call-button a:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
  animation: none;
}

.call-button a:active {
  transform: scale(0.95);
}

/* Анимация пульсации */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

/* Для мобильных устройств */
@media (max-width: 768px) {
  .call-button {
    display: block;
    bottom: 10%;
    right: 20px;
  }
  
  .call-button a {
    width: 70px;
    height: 70px;
    font-size: 12px;
  }
}
    </style>