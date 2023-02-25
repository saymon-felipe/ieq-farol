<template>
    <div class="schedule-container" id="schedule-container">
        <h1 class="section-title">Agenda</h1>
        <div class="events-container" v-if="loadComponents">
            <eventComponent v-for="(event, index) in events" :closest="closestEventId" :event="event" v-bind:key="index" />
        </div>
    </div>
</template>
<script>
import eventComponent from "../components/eventComponent.vue";
import moment from "moment";

export default {
    name: "scheduleComponent",
    data() {
        return {
            events: [
                {
                    event_id: 1,
                    event_name: "Campanha",
                    event_initial_date: "2023-02-23T19:30:00-03:00",
                    event_subtitle: "As 7 Unções"
                },
                {
                    event_id: 2,
                    event_name: "Culto Jovem",
                    event_initial_date: "2023-02-25T19:30:00-03:00",
                    event_subtitle: "ft. Bruna Pompeo"
                },
                {
                    event_id: 3,
                    event_name: "Culto da família",
                    event_initial_date: "2023-02-26T19:30:00-03:00",
                    event_subtitle: ""
                },
                {
                    event_id: 4,
                    event_name: "Culto de Oração",
                    event_initial_date: "2023-02-28T19:30:00-03:00",
                    event_subtitle: ""
                }
            ],
            closestEventId: null,
            loadComponents: false
        }
    },
    watch: {
        closestEventId: function () {
            if (this.closestEventId != null) {
                this.loadComponents = true;
            }
        }
    },
    methods: {
        calculateClosestDate: function () {
            let closestEventId;
            let dateDifference;

            for (let i = 0; i < this.events.length; i++) {
                let dateUnix = moment().unix();
                let eventDateUnix = moment(this.events[i].event_initial_date).unix();
                let eventDateDiference = eventDateUnix - dateUnix;

                if (i == 0 || eventDateDiference < dateDifference) {
                    dateDifference = eventDateDiference;
                    closestEventId = this.events[i].event_id;
                }
            }
            this.closestEventId = closestEventId;
        }
    },
    mounted: function () {
        this.calculateClosestDate();
    },
    components: {
        eventComponent
    }
}
</script>
<style scoped>
.schedule-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.events-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>