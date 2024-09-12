<template>
    <section 
            id="ticket"
            class="flexbox column pad-24 full"
            style="gap: 48px;"
        >   
        <div class="flexbox justify-between column">
            <h1 class="text-accent">Biglietti</h1>
            <h4>
                Interessato? Prendi il tuo biglietto su Eventbrite. L’ingresso è gratuito.
            </h4>
        </div>
        <div id="eventbrite-widget-container-1006887817567" style="flex: 1;"></div>
    </section>
</template>
<script setup>
onMounted(async () => {
    var exampleCallback = function() {
            console.log('Ordine completato.');
        };
        console.log("Creating widget");

        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '1006887817567',
            iframeContainerId: 'eventbrite-widget-container-1006887817567',

            // Optional
            iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        });

        console.log("Created widget");

});
</script>