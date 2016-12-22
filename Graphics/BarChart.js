function createBarChart(data, width, height, color) {
    var chart = document.createElement("div");
    chart.style.padding = "10px";
    chart.style.margin = "100px auto";
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
    chart.style.border = '2px solid black';
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) 
            max = data[i];
    }   
    var scale = width / max;
    var barWidth = Math.floor((height / data.length) - 2);
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElement("div");
        bar.innerHTML = data[i];
        fs = Math.floor(barWidth * 0.85) +"px";
        bar.style = "text-align: center; margin-top: 10px; font-size: " + fs;
        bar.style.width = data[i] * scale + "px";
        bar.style.height = barWidth + "px";
        bar.style.position = "absolute";
        bar.style.top = (barWidth +  2) * i + "px";
        bar.style.backgroundColor = color;
        chart.appendChild(bar);
    }
    return chart;
}