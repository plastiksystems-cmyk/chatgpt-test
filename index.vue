<script setup>
import yaml from 'yaml'
import docsYaml from './docs.yaml?raw'

import { ref } from 'vue'

// Parse YAML
// this was made with chatgpt for some reason
const docs = yaml.parse(docsYaml)
const sections = ref(docs.sections)
</script>

<template>
  <div class="docs-container">
    <aside class="sidebar">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a :href="'#' + section.id">{{ section.title }}</a>
        </li>
      </ul>
    </aside>    

    <main class="content">
      <section v-for="section in sections" :key="section.id" :id="section.id">
        <h2>{{ section.title }}</h2>
        <pre>{{ section.content }}</pre>
      </section>
    </main>
  </div>
</template>