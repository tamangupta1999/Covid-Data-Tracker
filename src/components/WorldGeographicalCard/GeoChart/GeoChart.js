import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, scaleLinear } from "d3";
import useResizeObserver from './UseResizeObserver';


const GeoChart = ({ data }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const svg = select(svgRef.current);

        let min = Math.min.apply(null, data.features.map(function (country) {
            return country.properties.gdp_md_est;
        }));
        let max = Math.max.apply(null, data.features.map(function (country) {
            return country.properties.gdp_md_est;
        }));

        const colorScale = scaleLinear()
            .domain([min, max])
            .range(["#ccc", "red"])

        const { width, height } =
            dimensions || wrapperRef.current.getBoundingClientRect();

        // projects geo-coordinates on a 2D plane
        const projection = geoMercator()
            .fitSize([width, height], selectedCountry || data)
            .precision(100);

        // takes geojson data,
        // transforms that into the d attribute of a path element
        const pathGenerator = geoPath().projection(projection);
        // render each country
        svg
            .selectAll(".country")
            .data(data.features)
            .join("path")
            .on("click", feature => {
                setSelectedCountry(selectedCountry === feature ? null : feature);
            })
            .attr("class", "country")
            .attr("fill", feature=> colorScale(feature.properties['gdp_md_est']))
            .transition()
            .duration(1000)
            .attr("d", feature => pathGenerator(feature));
        // render text
        svg
            .selectAll(".label")
            .data([selectedCountry])
            .join("text")
            .attr("class", "label")
            .text(
                feature =>
                  feature &&
                  feature.properties.name 
              )
            .attr("x", 15)
            .attr("y", 25);
       
    }, [data, dimensions, selectedCountry])
   
    return (
        <div ref={wrapperRef} style={{ marginBottom: "2rem", width: '578px', height: '339px', marginLeft: '10px' }}>
        <svg ref={svgRef} style={{ width: '578px', height: '339px' }}></svg>
    </div>
    );
}

export default GeoChart;