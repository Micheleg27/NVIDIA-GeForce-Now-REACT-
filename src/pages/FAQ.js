import React from "react";
import NavBianca from "../Components/NavBianca";
import GreenBannerNav from "../Components/GreenBannerNav";
import { NavNera } from "../Components/NavNera";
import { FooterNero } from "../Components/FooterNero";
import FooterBianco from "../Components/FooterBianco";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import NavTrasparenteFAQ from "../Components/NavTrasparenteFAQ";
import { Title } from "../Components/Title";
import AccordionElement from '../Components/BasicComponents/AccordionElement'
import AccordionItem from '../Components/BasicComponents/AccordionItem'
import { Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <NavTrasparenteFAQ />
      <HeaderScarica titleHeader={"FAQ su GeForce NOW"} />
      <Title h1title={"Domande generali"} />
      <Accordion className='container-accordion'>
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
            <AccordionItem accordionKey={1} accordionHeader={"Dove È Disponibile GeForce NOW?"} accordionBody={"GeForce NOW è attualmente messo a disposizione da NVIDIA in Nord America ed Europa e tramite i partner della rete GeForce NOW Alliance in altre parti del mondo. Visita la pagina dedicata allo stato dei server per consultare l'elenco dei server disponibili e il loro stato attuale."} />
            <AccordionItem accordionKey={2} accordionHeader={"Come Ci Si Abbona A GeForce NOW E Quanto Costa?"} accordionBody={"Visita la pagina di abbonamento e scegli il piano che preferisci. GeForce NOW offre tre opzioni di abbonamento, tra cui Priority e GeForce NOW RTX 3080 per un'esperienza superiore."} />
            <AccordionItem accordionKey={3} accordionHeader={"Quali Giochi Sono Disponibili?"} accordionBody={"Visita la pagina dei giochi supportati da GeForce NOW per verificare quali giochi puoi usare al momento. "} />
            <AccordionItem accordionKey={4} accordionHeader={"È Necessario Aver Acquistato I Giochi?"} accordionBody={"Sì, è necessario possedere o acquistare un gioco da uno degli store supportati prima di riprodurlo su GeForce NOW. Il servizio supporta quasi 100 dei giochi gratuiti tra i più popolari."} />
            <AccordionItem accordionKey={5} accordionHeader={"Come Mai Alcuni Giochi Sono Disponibili In Altri Paesi Ma Non Posso Accedervi?"} accordionBody={"GeForce NOW segue le direttive delle agenzie di classificazione dei contenuti. Facciamo del nostro meglio per rendere i giochi supportati disponibili in tutti i paesi, ma determinati giochi sono proibiti in alcuni stati. Visita la pagina dei giochi supportati per scoprire quali sono i titoli disponibili."} />
            <AccordionItem accordionKey={6} accordionHeader={"Ho Un Problema Con Lo Streaming Di Un Gioco. Come Posso Ricevere Assistenza?"} accordionBody={"Puoi contattare un operatore del servizio clienti qui. I nostri team di assistenza per i prodotti saranno lieti di assisterti. Puoi anche inviarci il tuo feedback premendo l'icona del punto esclamativo nell'app e condividere le tue opinioni o puoi discutere del tuo problema con la nostra community di GeForce NOW nel forum."} />
            <AccordionItem accordionKey={7} accordionHeader={"Vorrei Richiedere Una Funzionalità, Dove Posso Comunicarlo?"} accordionBody={"In alternativa, è disponibile lo strumento per inviare feedback sull'app GeForce NOW e condividere le tue opinioni e richiedere nuove funzionalità. I nostri team di prodotto e supporto leggono tutti i commenti inviati e il tuo contributo aiuta a progettare e aggiungere nuove funzionalità."} />
            <AccordionItem accordionKey={8} accordionHeader={"Quali Sono I Requisiti Minimi, Inclusa La Velocità Di Internet, Per Giocare A GeForce NOW?"} accordionBody={"Visita la pagina Requisiti di sistema per maggiori informazioni sui requisiti e la velocità di Internet."} />
        </AccordionElement>
        <Title h1title={"Abbonamento"} />
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"QUALI OPZIONI DI ABBONAMENTO SONO DISPONIBILI PER GEFORCE NOW?"} accordionBody={"GeForce NOW offre tre piani di abbonamento: Free, Priority e GeForce NOW RTX 3080. Puoi abbonarti qui."} />
            <AccordionItem accordionKey={1} accordionHeader={"Serve Una Carta Di Credito O Un Conto PayPal Per Fare L'abbonamento GeForce NOW Free?"} accordionBody={"No, non è necessario un metodo di pagamento per sottoscrivere un abbonamento gratuito."} />
            <AccordionItem accordionKey={2} accordionHeader={"QUALI METODI DI PAGAMENTO SONO ACCETTATI PER L’ABBONAMENTO A GEFORCE NOW?"} accordionBody={"Gli abbonamenti a GeForce NOW possono essere pagati con carta di credito, PayPal o con una carta regalo GeForce NOW. Le carte regalo possono essere acquistate con carte di credito prepagate. Tuttavia, valutiamo costantemente le possibilità di accettare opzioni di pagamento alternative. Inviaci un feedback nell'app per farci sapere quali metodi vorresti utilizzare."} />
            <AccordionItem accordionKey={3} accordionHeader={"Dove Posso Vedere Il Prezzo Del Mio Piano Di Abbonamento GeForce NOW?"} accordionBody={"Puoi visualizzare il tuo abbonamento nell'app in Impostazioni, nella sezione Abbonamento a GeForce NOW. Puoi modificare il piano facendo clic sul pulsante di gestione e selezionando i i piani di abbonamento sul nostro sito."} />
            <AccordionItem accordionKey={4} accordionHeader={"COME SI ELIMINA UN METODO DI PAGAMENTO REGISTRATO NEL MIO ACCOUNT?"} accordionBody={"Accedi al tuo account e visita la sezione degli abbonamenti di GeForce NOW. In Payment Methods (Metodi di pagamento) fai clic su Update (Aggiorna) per visualizzare i metodi di pagamento registrati. Fai clic su Delete (Elimina) per rimuovere la carta di credito selezionata o i dati PayPal."} />
        </AccordionElement>
        <Title h1title={"GeForce NOW RTX 3080"} />
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"QUANDO SARANNO DISPONIBILI GLI ABBONAMENTI A GEFORCE NOW RTX 3080?"} accordionBody={"Gli abbonamenti a GeForce NOW RTX 3080 sono al momento disponibili negli Stati Uniti e in Europa tramite il servizio Nvidia. Verifica la disponibilità e lo stato dei sistemi gaming RTX 3080 in base al data center locale qui: https://status.geforcenow.com/           Nota: gli abbonamenti a GeForce NOW 3080 non sono disponibili in tutti i data center al momento del lancio. Per ulteriori dettagli, consulta la disponibilità locale online."} />
            <AccordionItem accordionKey={1} accordionHeader={"IN COSA CONSISTE L'ABBONAMENTO GEFORCE NOW RTX 3080?"} accordionBody={"GeForce NOW RTX 3080 è il più recente piano di abbonamento al cloud streaming di GeForce NOW; offre ai giocatori le massime prestazioni con accesso esclusivo ai sistemi gaming RTX 3080, tempi di attesa ridotti e sessioni di gioco più lunghe. L'abbonamento a GeForce NOW RTX 3080 migliora il livello di cloud gaming, con fino a 1440p o 1600p, 120 FPS su PC e macOS e 4K HDR 60 FPS su NVIDIA SHIELD TV."} />
            <AccordionItem accordionKey={2} accordionHeader={"QUAL È LA DIFFERENZA TRA SISTEMI GEFORCE NOW RTX 3080 I SISTEMI BASIC E PREMIUM?"} accordionBody={"Ogni tipologia di sistema consente l'accesso a diverse GPU di livello server. Gli abbonati al piano Free hanno accesso ai sistemi Basic e a server GPU equivalenti a GTX 1060. Gli abbonati al piano Priority hanno accesso ai sistemi Premium o server GPU equivalenti a GeForce NOW RTX 2080 o GTX 1080. Gli abbonati al piano GeForce NOW RTX 3080 hanno accesso esclusivo ai nuovi sistemi gaming RTX 3080, con fino a 1440p a 120 FPS su PC, 1440p a 120 FPS sulla maggior parte degli iMac, 1600p a 120 FPS sulla maggior parte dei MacBook e 4K HDR a 60 FPS su NVIDIA SHIELD TV, in più tempi di attesa ridotti al minimo e sessioni di gioco più lunghe! Consulta i Termini di utilizzo di GeForce NOW e i Termini di abbonamento a GeForce NOW per maggiori dettagli."} />
            <AccordionItem accordionKey={3} accordionHeader={"QUALI REQUISITI INTERNET O DI SISTEMA SONO RACCOMANDATI PER GLI ABBONAMENTI A GEFORCE NOW RTX 3080?"} accordionBody={"GeForce NOW richiede almeno 35 mbps per lo streaming fino a 1440p o 1600p a 120 FPS. Si consiglia inoltre una connessione Ethernet cablata o un router wireless a 5 GHz. Visita la pagina Requisiti di sistema per la compatibilità dei dispositivi, l'hardware raccomandato e i dettagli relativi alle regioni supportate. Leggi anche questo articolo della knowledge base per ulteriori dettagli su come configurare il dispositivo per l'abbonamento a GeForce NOW RTX 3080."} />
            <AccordionItem accordionKey={4} accordionHeader={"QUALI DISPOSITIVI SUPPORTANO LE FUNZIONALITÀ DELL'ABBONAMENTO A GEFORCE NOW RTX 3080?"} accordionBody={"Tutti i dispositivi hanno accesso ai sistemi gaming RTX 3080, che offrono il massimo livello di prestazioni la latenza minima. Gli abbonati a GeForce NOW RTX 3080 ottengono inoltre sessioni di gioco più lunghe e l'accesso esclusivo ai sistemi gaming RTX 3080. I sistemi gaming RTX 3080 offrono fino a 1440p a 120 FPS su PC, 1440p a 120 FPS sulla maggior parte degli iMac, 1600p a 120 FPS sulla maggior parte dei MacBook utilizzando le app native; 1440p o 1600p s 120 FPS non supportati con https://play.geforcenow.com. Gli utenti di NVIDIA SHIELD TV hanno accesso allo streaming 4K HDR a 60 FPS con audio surround a due canali, 5.1 o 7.1. Infine, gli utenti con telefoni Android con display a 120 Hz possono accedere allo streaming a 120 FPS. Leggi questo articolo della knowledge base per ulteriori dettagli su come configurare il dispositivo per l'abbonamento a GeForce NOW RTX 3080."} />
            <AccordionItem accordionKey={5} accordionHeader={"SONO GIÀ ABBONATO A UN PIANO GEFORCE NOW. SE PASSO ORA A GEFORCE NOW RTX 3080, COSA SUCCEDE AL SALDO RESIDUO DEL MIO PIANO?"} accordionBody={"I giorni rimanenti nell'attuale periodo di fatturazione vengono convertiti proporzionalmente e arrotondati per eccesso in giorni di abbonamento RTX 3080. I giorni convertiti estendono il ciclo di fatturazione del nuovo abbonamento a RTX 3080. Ad esempio, se hai 15 giorni residui in un abbonamento Priority di 1 mese e passi al piano RTX 3080 di 6 mesi, il tuo primo ciclo di fatturazione verrà esteso di 9 giorni in base alla conversione proporzionata di giorni."} />
            <AccordionItem accordionKey={6} accordionHeader={"SONO ABBONATO AL PIANO FOUNDERS. COSA SUCCEDE AI BENEFIT FOUNDERS FOR LIFE SE PASSO AL PIANO GEFORCE NOW RTX 3080?"} accordionBody={"Gli abbonati a Founders possono passare al nuovo piano GeForce NOW RTX 3080 senza rischi! I benefit Founders resteranno attivi finché sarai abbonato a un piano a pagamento. I giorni rimanenti nell'attuale periodo di fatturazione vengono convertiti proporzionalmente e arrotondati per eccesso in giorni di abbonamento RTX 3080. I giorni convertiti estendono il ciclo di fatturazione del nuovo abbonamento a RTX 3080. Ad esempio, se hai 15 giorni residui in un abbonamento Founders di 1 mese e passi al piano RTX 3080 di 6 mesi con lo sconto Founders applicato, il tuo primo ciclo di fatturazione verrà esteso di 5 giorni in base alla conversione proporzionata di giorni. Visita le FAQ sull'abbonamento Founders per saperne di più."} />
            <AccordionItem accordionKey={7} accordionHeader={"GLI ABBONAMENTI A GEFORCE NOW RTX 3080 SONO AL MOMENTO ESAURITI. NE VERRANNO MESSI A DISPOSIZIONE ALTRI?"} accordionBody={"Gli abbonamenti a GeForce NOW RTX 3080 sono limitati. Iscriviti alla lista d'attesa per essere avvisato quando saranno disponibili altri abbonamenti. Per ulteriori dettagli, consulta la disponibilità regionale online."} />
            <AccordionItem accordionKey={8} accordionHeader={"POSSO USARE UNA CARTA REGALO PER ACQUISTARE UN ABBONAMENTO A GEFORCE NOW RTX 3080?"} accordionBody={"No. Al momento le carte regalo possono essere usate solo per acquistare abbonamenti Priority."} />
        </AccordionElement>
        <Title h1title={"iPhone e iPad"} />
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"COME SI USA GEFORCE NOW SU IPhone O IPad?"} accordionBody={"Avvia Safari e visita https://play.geforcenow.com. "} />
            <AccordionItem accordionKey={1} accordionHeader={"A QUALI GIOCHI POSSONO GIOCARE SU IPhone O IPad?"} accordionBody={"Solo i giochi che supportano gamepad completi o parziali sono compatibili con iPhone o iPad.  È possibile utilizzare una tastiera o un mouse per navigare nei menu di gioco o per digitare nomi utente e password.  Per i giochi che richiedono tastiera e mouse, scarica la nostra app per Windows, macOS, Android o Chromebook."} />
            <AccordionItem accordionKey={2} accordionHeader={"È POSSIBILE UTILIZZARE UN BROWSER WEB DIVERSO INVECE DI SAFARI?"} accordionBody={"Al momento GeForce NOW supporta solo Safari su iOS e iPadOS. È supportato l'utilizzo del browser Chrome su dispositivi Windows, macOS e Chromebook e del browser Edge su dispositivi Windows."} />
            <AccordionItem accordionKey={3} accordionHeader={"QUALI IPhone SONO COMPATIBILI?"} accordionBody={"iPhone con iOS 14.3o superiore o iPad con iPadOS 14.3 o superiore.  È possibile trovare un elenco di dispositivi compatibili sul sito di Apple o nei nostri requisiti di sistema."} />
            <AccordionItem accordionKey={4} accordionHeader={"QUALI GAMEPAD FUNZIONANO CON IPhone E IPad?"} accordionBody={"Consulta i requisiti di sistema per l'elenco completo di Gamepad supportati. "} />
            <AccordionItem accordionKey={5} accordionHeader={"POSSO USARE UNA TASTIERA E UN MOUSE PER GIOCARE SU IPad?"} accordionBody={"È possibile utilizzare una tastiera o un mouse per navigare nei menu di gioco o per digitare nomi utente e password, ma si consiglia vivamente un gamepad per giocare. Tastiera e mouse non sono disponibili per il gioco a causa delle limitazioni in Safari."} />
            <AccordionItem accordionKey={6} accordionHeader={"C'È UN'APP IOS O IPAD OS CHE POSSO SCARICARE DALL'APP STORE INVECE DI UTILIZZARE SAFARI?"} accordionBody={"No.   Al momento, puoi divertirti con GeForce NOW su iPhone e iPad solo avviando Safari e visitando https://play.geforcenow.com."} />
            <AccordionItem accordionKey={7} accordionHeader={"DOVE SONO SUPPORTATI IPhone E IPad?"} accordionBody={"iPhone e iPad sono al momento supportati in Nord America e in Europa. "} />
            <AccordionItem accordionKey={8} accordionHeader={"COME POSSO OTTENERE ASSISTENZA TECNICA SU IPhone E IPad?"} accordionBody={"Puoi contattare il nostro servizio clienti o sfogliare gli articoli di supporto. "} />
        </AccordionElement>
        <Title h1title={"Android"} />
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"QUALI TELEFONI ANDROID SONO COMPATIBILI?"} accordionBody={"Sono supportati i telefoni Android con 1 GB o più di memoria e sistema Android 5.0 (L) o successivi.  Nota: lo streaming di giochi può assorbire rapidamente i giga disponibili nel tuo piano dati.  Ti consigliamo di collegarti a una rete Wi-Fi 5 GHz per un'esperienza ottimale."} />
            <AccordionItem accordionKey={1} accordionHeader={"SE USO GEFORCE NOW SU PC, MAC O SHIELD, POSSO GIOCARE ANCHE SUL TELEFONO ANDROID?"} accordionBody={"Sì, l'account GeForce NOW funziona su molti dispositivi, ora anche su smartphone Android."} />
            <AccordionItem accordionKey={2} accordionHeader={"COME POSSO COMINCIARE?"} accordionBody={"Accedi al tuo account GeForce NOW dal tuo telefono cellulare, apri il tuo catalogo di giochi recenti e continua la partita da dove l'avevi interrotta. Consigliamo vivamente un gamepad Bluetooth, tra cui: NVIDIA SHIELD Controller, Razer Raiju o Junglecat Mobile, Steelseries Stratus Duo o Thundersoft's Glap. Nota: alcuni giochi potrebbero richiedere un controller gamepad connesso o una tastiera/mouse wireless. Dai un'occhiata a questi gamepad e non solo qui."} />
            <AccordionItem accordionKey={3} accordionHeader={"PERCHÉ MI VIENE CHIESTO DELL'AUDIO?"} accordionBody={"È il modo di Android per indicare che l'app GeForce NOW vuole accedere al microfono del tuo telefono. Così si abilita la chat vocale nel gioco. L'audio non viene registrato."} />
        </AccordionElement>
      </Accordion>
      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}

export default FAQ;
/* <AccordionItem accordionKey={0} accordionHeader={""} accordionBody={""} /> */


