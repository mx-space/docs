<template>
  <div>
    <section id="hero">
      <h1 class="tagline">
        <span class="accent">Mix</span>
        Space
      </h1>

      <p class="description">An alternative personal space.</p>

      <p class="actions">
        <a class="get-started" href="/introduce/"> Get Started </a>
        <a class="setup" href="/deploy/">Install</a>
      </p>
    </section>

    <section id="highlights" class="vt-box-container">
      <div class="vt-box">
        <h2>开箱即用</h2>
        <p>上 Docker！</p>
      </div>
      <div class="vt-box">
        <h2>速度快不快</h2>
        <p>支持 Node 集群，高并发起飞</p>
      </div>
      <div class="vt-box">
        <h2>指标</h2>
        <p>Kami 100% SEO && 80% Performance</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 42px 32px;
}
#hero {
  padding: 96px 32px;
  text-align: center;
}
.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}
html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}
.actions a:not(.get-started) {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}
.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}
.actions .get-started:hover {
  transition-duration: 0.2s;
}
.actions .get-started:hover .icon {
  transform: translateX(2px);
}
.actions .setup {
  color: var(--vt-c-text-code);
}
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

.get-started {
  font-size: 16px;
  display: inline-block;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
  position: relative;
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px;
  padding: 8px 18px;
}
.dark .get-started {
  color: var(--vt-c-indigo);
}
.get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}
.dark .get-started:hover {
  background-color: var(--vt-c-green-light);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}
#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}
#highlights p {
  font-weight: 400;
  font-size: 15px;
}
#highlights .vt-box {
  background-color: transparent;
}
@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}
@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  .actions a {
    margin: 0.5em 0;
  }
}
@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
  .get-started {
    margin-right: 0;
  }
}
</style>
