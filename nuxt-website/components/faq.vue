<template>
    <div class="faq-section">  
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleAnswer(index)" class="faq-question">
          {{ faq.question }}
          <img src="@/assets/svg/chevron-down.svg" />
        </button>
        <div v-if="activeIndex === index" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';

    const activeIndex = ref(null); // To track which FAQ is open

    const faqs = [
        { question: 'Come posso arrivarci?', answer: 'Puoi facilmente raggiungere il Laboratorio Aperto di Modena con i mezzi pubblici o semplicemente a piedi. Controlla la pagina delle indicazioni per ulteriori dettagli.' },
        { question: 'Ho bisogno di un biglietto per partecipare al DevFest Modena?', answer: 'Sì, la partecipazione al DevFest è gratuita, ma la registrazione è obbligatoria. Essere in lista d\'attesa non è sufficiente per partecipare alla conferenza.' },
        { question: 'Non posso partecipare al DevFest, cosa devo fare?', answer: 'Se non puoi partecipare, ti chiediamo gentilmente di cancellare il tuo ordine tramite la piattaforma Eventbrite, oppure inviaci un\'email (possiamo farlo per te).' },
        { question: 'Devo stampare i miei biglietti?', answer: 'No, puoi utilizzare il tuo smartphone per mostrarci il biglietto. Mostrare l\'email con il QR code del biglietto è sufficiente. Assicurati di avere il biglietto pronto per non rallentare il processo di check-in.' },
        { question: 'Dovrei venire anche se sono ancora in lista d\'attesa?', answer: 'Puoi venire anche se sei in lista d\'attesa, ma non possiamo assicurarti che avrai un posto. Rilasceremo i biglietti delle persone che non si presentano durante la giornata, quindi potresti avere una possibilità di entrare, ma questo è fuori dal nostro controllo e non possiamo dirti in anticipo se otterrai un posto.' },
        { question: 'Posso dare il mio biglietto a un amico?', answer: 'Purtroppo, questo non è possibile. Se non hai intenzione di venire, per favore cancella il tuo biglietto e chiedi al tuo amico di registrarsi per un nuovo biglietto.' },
        { question: 'Posso lasciare la conferenza e tornare più tardi?', answer: 'Sì, puoi sempre lasciare la conferenza e tornare quando vuoi. Per entrare nella sede avrai comunque sempre bisogno del tuo badge (che riceverai all\'ingresso).' },
        { question: 'Cosa devo portare alla conferenza?', answer: 'Il tuo biglietto. Questa è l\'unica cosa necessaria che non dovresti dimenticare.' },
        { question: 'È un evento di Google?', answer: 'No, l\'evento è delle diverse comunità locali di sviluppatori. Google fa comunque parte degli sponsor e ci fornisce supporto.'},
        { question: 'Ho delle allergie/intolleranze alimentari, come posso fare?', answer: 'Siamo in grado di gestire allergie e intolleranzie alimentari. Segnalacelo quando prenoti il biglietto, comunque entro 3 giorni prima dell\'evento.' },
        { question: 'Dove trovo parcheggio?', answer: 'Il parcheggio è sotterraneo, economico, vicino all\'ingresso dell\'evento, e con una capienza di 400 posti auto.'},
        { question: 'L\'evento è gratuito?', answer: 'Si'},
    ];

    const toggleAnswer = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index;
    };
</script>
  
<style scoped>
    .faq-section {
    width: 80%;
    max-width: 800px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .faq-item {
    margin-bottom: 10px;
    }

    .faq-question {
    width: 100%;
    padding: 15px;
    background-color: #34A853;
    color: white;
    border: none;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
    outline: none;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    }

    .faq-answer {
    padding: 15px;
    background-color: #f9f9f9;
    margin-top: 5px;
    border-left: 3px solid #34A853;
    border-radius: 5px;
    }

    .faq-question:focus {
    outline: none;
    }
</style>
  