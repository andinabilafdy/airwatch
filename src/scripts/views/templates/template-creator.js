import getAqiInfo from '../../utils/get-aqi-info';

// eslint-disable-next-line default-param-last
const createAQIDetailTemplate = (data, aqiStatus, aqiClassUrl, aqiColors, aqiInfo, screenWidth = 0) => `
    <div class="detail-content ${getAqiInfo((data.aqi === '-' ? 0 : data.aqi), aqiClassUrl)}">
        <p class="aqi-label" style="color: white; font-weight: bold;">Index Kualitas Udara</p>
        <div class="aqi-index-detail" style="background-color: ${getAqiInfo((data.aqi === '-' ? 0 : data.aqi), aqiColors)};">
            <h1>${data.aqi === '-' ? 0 : data.aqi}</h1>
        </div>
        <div class="aqi-detail-container">
            <h1>${data.city.name}</h1>
            <p>Status: <span style="color: ${getAqiInfo((data.aqi === '-' ? 0 : data.aqi), aqiColors)}; font-weight: bold;">${getAqiInfo(data.aqi, aqiStatus)}</span></p>
            <div class="current-aqi-info">
              <h3>💡 Info Kualitas Udara</h3>
              <p>${getAqiInfo((data.aqi === '-' ? 0 : data.aqi), aqiInfo)}</p>
            </div>
            <div class="attributions">
                <p class="data-source">Data by: <a href="${data.attributions[0].url}" target="_blank">${data.attributions[0].name}</a></p>
                <p class="data-source">Provided by: <a href="${data.attributions[1].url}" target="_blank">${data.attributions[1].name}</a></p>
            </div>
        </div>
    </div>
    <div class="charts">
    <div class="aqi-chart-card general-aqi-chart">
        <h3>Polutan Dominan</h3>
        <canvas id="aqisChart" width="${screenWidth < 767 ? 1 : screenWidth <= 900 ? 2 : 3}" height="${screenWidth >= 1150 ? 1 : screenWidth > 900 ? 2 : 1}"></canvas>
        <canvas id="aqiChart"></canvas>
    </div>
    <div class="aqi-chart-card forecast-aqi-chart">
        <h3>Perkiraan Indeks Pencemaran</h3>
        <canvas id="aqiChartForecast" width="3" height="2"></canvas>
    </div>
    </div>
`;

const createBlogArticleTemplate = (articleData, currentBlogUrlToShare) => `
    <h1>${articleData.title}</h1>
    <div class="share-links">
        <a class="share-link-button copy-to-clipboard" href="${window.location.href}" id="copyToClipboard"><i class="fa-regular fa-copy"></i></a>
        <a class="share-link-button whatsapp" href="${currentBlogUrlToShare.wa}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        <a class="share-link-button facebook" href="${currentBlogUrlToShare.fb}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a class="share-link-button x-twitter" href="${currentBlogUrlToShare.tw}" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
    </div>
    <img style="width: 100%;" src="${articleData.image_url}">
    <article>
    <p class="overview">${articleData.overview}</p>
    ${articleData.content.sections.map((section) => `
        ${section.title ? `<br><h3>${section.title}</h3>` : ''}
        ${section.image_url ? `<img style="width: 100%;" src="${section.image_url}">` : ''}
        ${section.paragraph ? `<p>${section.paragraph}</p>` : ''}
        ${section.list ? `<div style="margin: .5rem 0">${section.list.map((item) => `<li>${item}</li>`).join('')}</div>` : ''}
    `).join('')}
    </article>
`;

export {
  createAQIDetailTemplate,
  createBlogArticleTemplate,
};
