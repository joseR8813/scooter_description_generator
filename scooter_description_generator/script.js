function collectAndSortData() {
    // Get the values from the form
    const year = document.getElementById('year').value;
    console.log("Year:", year);
    const manufacturer = document.getElementById('manufacturer').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const condition = document.getElementById('condition').value;
    const engineType = document.getElementById('engine-type').value;
    const tankCapacity = document.getElementById('tank-capacity').value;
    const fuelConsumption = document.getElementById('fuel-consumption').value;
    const topSpeed = document.getElementById('top-speed').value;
    const maintenance = document.getElementById('maintenance').value;
    const mileage = document.getElementById('mileage').value;
    const batteryCapacity = document.getElementById('battery-capacity').value;
    const chargingTime = document.getElementById('charging-time').value;
    const range = document.getElementById('range').value;

    // Initialize an empty description string
    let description = `Introducing the ${manufacturer} ${model} (${year}), a ${color} scooter that is in ${condition} condition. `;

    // Add engine type-specific details
    if (engineType === "electric") {
        description += `This electric scooter has a battery capacity of ${batteryCapacity} KWh, providing a range of ${range} km per charge. Charging time is approximately ${chargingTime} hours. `;
    } else if (engineType === "diesel") {
        description += `This fuel engine scooter features a ${tankCapacity} liter fuel tank, with an average fuel consumption of ${fuelConsumption} L/100Km. `;
    }

    // Add performance details
    description += `It has a top speed of ${topSpeed} Km/h and has covered ${mileage} kilometers. Maintenance requirements are ${maintenance}.`;

    // Display the generated description in an HTML element
    document.getElementById('descriptionOutput').innerText = description;
}