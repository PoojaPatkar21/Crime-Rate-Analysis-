class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        `
  <header class="navbar navbar-nav navbar-expand navbar-theme-dark">
  <div class="container-fluid px-3 px-md-4">
  
  
    <!-- -----------------website name and icon-------------- -->
  
    <div class="d-flex align-item pt-2 pb-2 pr-2s-center">
      <a class="navbar-brand py-2 px-3 rounded border border-dark mr-xl-4" href="/">
  
        <span class="ml-2 text-light" style="font-size: large;"><i class="fas fa-user-secret"></i>&nbsp &nbsp Crime Data
          Analysis</span>
      </a>
    </div>
  
    <!-- ---------------------nav-bar-item pt-2 pb-2 pr-2s---------------------------- -->
    <div class="d-flex align-item pt-2 pb-2 pr-2s-center">
      <div class="d-none d-lg-block">
        <a href="/" class="btn btn-dark text-light rounded border shadow none border-light mr-2"><i class="fas fa-home"></i>&nbsp Home</a>
        <a href="crime-charts.html" class="btn btn-dark text-light rounded border shadow none border-light mr-2" onclick="audio()"><i class="fas fa-chart-pie"></i>&nbsp CrimeCharts</a>
        <a href="crime-data.html" class="btn btn-dark text-light rounded border shadow none border-light mr-2" onclick="audio()"><i class="fas fa-globe-asia"></i> &nbsp CrimeData</a>
        <a href="crime-map.html" class="btn btn-dark text-light rounded border shadow none border-light mr-2" onclick="audio()"><i class="fas fa-map"></i> &nbsp CrimeMap</a>
        <a href="find.html" class="btn btn-dark text-light rounded border shadow none border-light mr-2" onclick="audio()"><i class="fas fa-clipboard-list"></i> &nbsp Findings</a>
        <a href="news-feed.html" class="btn btn-dark text-light rounded border shadow none border-light mr-2" onclick="audio()"><i class="fas fa-newspaper"></i> &nbsp CrimeNews</a>

        </div>
    </div>
  
 
    <div id="txt" class= text-light> 
    </div>
  
  </div>
  
  <script src="https://kit.fontawesome.com/7bdcd846e8.js" crossorigin="anonymous"></script>
  
  `
  
    }
  }
  
  customElements.define('my-header', MyHeader);
  
  
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        `
  <footer>
  <div class="row pt-5 mx-auto" style="
  position: absolute;
  bottom: 5;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;">
      <div class="col-3 justify-content-center d-flex"><i class="fas fa-globe-asia"></i>  Crime Data Analysis And Visualization</div>
  </div>
  </footer>
  
  
  `
  
    }
  }
  
  customElements.define('my-footer', MyFooter);