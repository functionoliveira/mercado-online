<template>
  <div class="schedule">
    <div class="schedule__wrap">
      <v-btn-toggle
        v-model="selected"
        mandatory
      >
        <div class="schedule__day" v-for="(day, i) in days" :key="i">
          <div class="day__header">{{ day.date }}</div>
          <v-btn :disabled="!day.morning" :value="`${day.date}-1`">Manhã</v-btn>
          <v-btn :disabled="!day.evening" :value="`${day.date}-2`">Tarde</v-btn>
        </div>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script src="./schedule.js"></script>
<style src="./schedule.scss" lang="scss"></style>