<script>
    new Chart(document.getElementById("identidad"), {
        type: "bar",
        data: {
            labels: ["Argentina","Australia","Austria","Belgium","Brazil","Canada","Chile","China (Mainland)","Colombia","Czech Republic","Denmark","Estonia","Finland","France","Germany","Hong Kong","India","Ireland","Italy","Japan","Malaysia","Mexico","Netherlands","Saudi Arabia","Singapore","South Korea","Sweden","Switzerland","Taiwan","Thailand","United Kingdom","United States","Vietnam"],
            datasets: [
                {
                    label: "Veces en el top 100",
                    data: [2, 5, 2, 1, 1, 2, 1, 6, 1, 1, 1, 1, 1, 3, 2, 2, 1, 1, 6, 2, 2, 2, 4, 1, 3, 3, 3, 2, 1, 1, 11, 24, 1],
                    backgroundColor: "rgb(214, 214, 214)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1, // Proporción 5:4 (Ancho / Alto = 5 / 4 = 1.25)
        },
    });
</script>
            </table>

            <h3>Oportunidades para estudiantes de la Universidad de Chile</h3>

            <p>Para la Carrera de Diseño de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile, la nómina de convenios vigentes incluye alternativas posicionadas entre las 100 mejores en Arte y Diseño según el Ranking QS:</p>

            <ul>
                <li><em>Politecnico di Milano (polimi; Italia):</em> Es la principal opción europea del ranking con convenio directo disponible.</li>
                <li><em>Universidade de São Paulo (Brasil):</em> Referente regional destacado en la clasificación mundial de Arte y Diseño.</li>
                <li><em>Universidad de Buenos Aires (<abbr title="Universidad de Buenos Aires">UBA</abbr>; Argentina):</em> Una de las instituciones históricas más prominentes de Sudamérica dentro del índice.</li>
                <li><em>Tecnológico de Monterrey (Tec; México):</em> Presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.</li>
                <li><em>Universidad Nacional Autónoma de México (<abbr title="Universidad Nacional Autónoma de México">UNAM</abbr>; México):</em> Una de las macro-escuelas más reconocidas de la región en artes y humanidades.</li>
            </ul>

            <div class="nota"><span>Nota:</span> La disponibilidad de cupos, requisitos de idioma y llamados a postulación deben verificarse cada año, así como el resultado del Ranking QS.</div>
			 <svg viewBox="0 0 880 580">

    <!-- Todo el radar se dibuja con el centro en (0,0) y luego se mueve -->
    <g transform="translate(300 300)">

      <!-- Círculos concéntricos (0 a 100, cada 20 puntos) -->
      <g class="grid">
        <circle r="48" />
        <circle r="96" />
        <circle r="144" />
        <circle r="192" />
        <circle r="240" />
      </g>

      <!-- Cinco ejes, uno por indicador -->
      <g class="eje">
        <line x2="0"      y2="-240" />
        <line x2="228.3"  y2="-74.2" />
        <line x2="141.1"  y2="194.2" />
        <line x2="-141.1" y2="194.2" />
        <line x2="-228.3" y2="-74.2" />
      </g>

      <!-- Nombres de los indicadores -->
      <text class="texto" x="0"      y="-255">Staff with PhD</text>
      <text class="texto" x="246"    y="-77">Academic Reputation</text>
      <text class="texto" x="151"    y="208">International Research Network</text>
      <text class="texto" x="-151"   y="208">Papers Per Faculty</text>
      <text class="texto" x="-246"   y="-77">Citations per Paper</text>

      <!-- Un polígono por universidad: id para JS, clase para CSS -->
      <polygon id="puc"   class="area puc"   points="0,-236 228.3,-74.2 141.1,194.2 -137.5,189.3 -176.9,-57.5" />
      <polygon id="uch"   class="area uch"   points="0,-173 228.3,-74.2 141.1,194.2 -141.1,194.2 -175.9,-57.2" />
      <polygon id="udec"  class="area udec"  points="0,-153 205.4,-66.7 139.3,191.7 -126.4,173.9 -200.7,-65.2" />
      <polygon id="usach" class="area usach" points="0,-70 216.8,-70.5 138.1,190.1 -114,156.9 -139.8,-45.4" />
    </g>

    <!-- Leyenda -->
    <g transform="translate(605 60)">
      <text font-weight="bold" font-size="12">Instituciones</text>

      <g class="item" onclick="alternar('puc', this)">
        <rect y="16" fill="#FEC60D" />
        <text x="22" y="28">Pontificia Universidad Católica</text>
      </g>
      <g class="item" onclick="alternar('uch', this)">
        <rect y="38" fill="#1F5592" />
        <text x="22" y="50">Universidad de Chile</text>
      </g>
      <g class="item" onclick="alternar('udec', this)">
        <rect y="60" fill="#2ca02c" />
        <text x="22" y="72">Universidad de Concepción</text>
      </g>
      <g class="item" onclick="alternar('usach', this)">
        <rect y="82" fill="#d62728" />
        <text x="22" y="94">Universidad de Santiago</text>
      </g>
    </g>
  </svg>

            <dl>
                <dt>Fuentes</dt>
                <dd>
                    <em>Datos:</em> Tomados el 21 de septiembre de 2026 desde <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener">QS World University Rankings for Art and Design</a>.
                </dd>
                <dd>
                    <em>Procesamiento:</em> Datos estructurados y servidos en JSON mediante <a href="https://myjson.online/" target="_blank" rel="noopener">myJson</a> y consulta asíncrona (<a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener">Fetch API</a>).
                </dd>
                <dd>
                    <em>Referente:</em> Estructura basada en el reportaje <a href="https://www.reuters.com/graphics/NEPAL-FLOODS/HYDROPOWER/jnpwoymwkpw/" target="_blank" rel="noopener">Nepal's tunnel maze that trapped hydropower workers</a> de <a href="https://www.reuters.com/authors/vijdan-mohammad-kawoosa/" target="_blank" rel="noopener">Vijdan Mohammad Kawoosa</a> para <a href="https://www.reuters.com/graphics/" target="_blank" rel="noopener">Reuters Graphics</a>, lo que implica adoptar un estándar global de validación visual y periodística aportado por una agencia internacional de noticias.
                </dd>
                <dd>
                    <em>Contexto:</em> Proyecto desarrollado como ejercicio práctico para la asignatura <a href="https://github.com/profesorfaco/troncal" target="_blank" rel="noopener">Diseño y Visualización de Información</a>.
                </dd>
                <dd>
                    <em>Oportunidades para estudiantes:</em> Se aprovecha la nómina completa de intercambios recibida por la Jefatura de Carrera el 7 de septiembre de 2026 desde la Dirección Académica y de Relaciones Internacionales de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile.
                </dd>
            </dl>
             <script src="script.js"></script>
			  <script>
    // Agrega o quita una clase CSS: el JS solo cambia clases, el CSS decide cómo se ve
    function alternar(id, item) {
      document.getElementById(id).classList.toggle("no");
      item.classList.toggle("apagado");
    }
  </script>