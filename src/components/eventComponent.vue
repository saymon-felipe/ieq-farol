<template>
    <div class="event-component-container" v-on:click="goToEvent()">
        <p class="day-name">{{ extendedDaysName[date.day()] }}</p>
        <div class="event-internal" :style="closest == event.event_id ? 'border-color: var(--red-high)' : ''">
            <div class="event-time" :style="closest == event.event_id ? 'border-color: var(--red-high)' : ''">
                <p class="date">{{ date.format("DD/MM") }}</p>
                <p class="date-time">{{ date.format("HH:mm") }}</p>
            </div>
            <div class="event-informations">
                <p class="event-name" :title="event.event_name">{{ event.event_name }}</p>
                <p class="event-subtitle" :title="event.event_subtitle">{{ event.event_subtitle == "" ? "&nbsp;" : event.event_subtitle }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: "eventComponent",
    props: ["event", "closest"],
    data() {
        return {
            extendedDaysName: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            date: moment(this.event.event_initial_date)
        }
    },
    methods: {
        goToEvent: function () {
            let eventId = this.event.event_id;
            console.log(this.event)
            this.$router.push("/events/" + eventId);
        }
    }
}
</script>
<style scoped>
.event-component-container {
    cursor: pointer;
    margin-bottom: .5rem;
}

.event-component-container:hover .event-internal {
    box-shadow: 0 0 15px var(--yellow-high);
} 
.event-internal {
    border: 1px solid var(--gray);
    border-radius: .4rem;
    padding: .5rem;
    margin: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: box-shadow 0.4s;
}

.day-name {
    font-weight: bold;
    margin: 0;
    font-size: 1.2rem;
    text-align: center;
}

.event-time {
    text-align: center;
    padding: .3rem 1rem;
    border-right: 1px solid var(--gray);
}

.date, .date-time {
    margin: 0;
    font-weight: bold;
    line-height: calc(1ch + 5px);
}

.date {
    font-size: 1.7rem;
    margin-bottom: 10px;
}
.date-time {
    font-size: 1rem;
}


.event-informations {
    padding: .3rem 1rem;
    text-align: center;
}

.event-name, .event-subtitle {
    margin: 0;
    max-width: 155px;
    min-width: 155px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.event-name {
    font-weight: bold;
    font-size: 1.3rem;
}

.event-subtitle {
    font-weight: 600;
    font-size: 1rem;
}

@media (max-width: 490px) {
    .event-name, .event-subtitle {
        max-width: 100px;
        min-width: 100px;
    }

    .date {
        font-size: 1.2rem;
    }
    .date-time {
        font-size: .8rem;
    }
    .event-internal {
        padding: .2rem;
    }
    .event-name {
        font-size: 1rem;
    }

    .event-subtitle {
        font-size: .7rem;
    }

    .day-name {
        font-size: 1rem;
    }
}
</style>