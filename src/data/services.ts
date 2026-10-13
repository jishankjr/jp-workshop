
export type Service = {
  name: string;
  description: string;
  price: string;
};

export type ServiceCategory = {
  title: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Regular Maintenance",
    services: [
      {
        name: "General Bike & Scooter Servicing",
        description: "Routine servicing and essential vehicle checks.",
        price: "From Rs. 550",
      },
      {
        name: "Engine Oil Change / Mobil",
        description: "Engine oil replacement and basic checks.",
        price: "From Rs. 750",
      },
      {
        name: "General Maintenance & Tune-Up",
        description: "Routine adjustments to keep your vehicle running smoothly.",
        price: "From Rs. 300",
      },
      {
        name: "Vehicle Inspection & Troubleshooting",
        description: "Initial inspection to identify possible issues.",
        price: "From Rs. 200",
      },
      {
        name: "Bike Washing & Cleaning",
        description: "Basic exterior cleaning for your bike or scooter.",
        price: "Free with servicing",
      },
    ],
  },
  {
    title: "Engine & Performance",
    services: [
      {
        name: "Engine Repair",
        description: "Engine diagnosis and mechanical repair.",
        price: "After inspection",
      },
      {
        name: "Mileage & Pickup Problem Diagnosis",
        description: "Checks for poor mileage, weak pickup, or performance issues.",
        price: "From Rs. 200",
      },
      {
        name: "Carburetor Cleaning & Repair",
        description: "Carburetor cleaning, adjustment, and repair.",
        price: "From Rs. 250",
      },
      {
        name: "Fuel System Maintenance",
        description: "Inspection and maintenance of fuel delivery components.",
        price: "From Rs. 200",
      },
      {
        name: "Air Filter Cleaning & Replacement",
        description: "Air filter cleaning or replacement as required.",
        price: "From Rs. 100",
      },
      {
        name: "Spark Plug Replacement",
        description: "Spark plug inspection and replacement.",
        price: "From Rs. 100",
      },
    ],
  },
  {
    title: "Safety & Handling",
    services: [
      {
        name: "Brake Repair & Maintenance",
        description: "Brake inspection, adjustment, and repair.",
        price: "From Rs. 200",
      },
      {
        name: "Tyre & Puncture Repair",
        description: "Tyre inspection and puncture repair.",
        price: "From Rs. 150",
      },
      {
        name: "Suspension & Steering Repair",
        description: "Inspection and repair of suspension and steering components.",
        price: "After inspection",
      },
      {
        name: "Chain & Sprocket Service",
        description: "Chain cleaning, lubrication, adjustment, and inspection.",
        price: "From Rs. 200",
      },
      {
        name: "Clutch & Gear Repair",
        description: "Inspection and adjustment of clutch and gear systems.",
        price: "From Rs. 200",
      },
      {
        name: "Cable & Lever Replacement",
        description: "Replacement of worn cables and levers.",
        price: "Labour from Rs. 150",
      },
    ],
  },
  {
    title: "Electrical & Starting",
    services: [
      {
        name: "Electrical Repair",
        description: "Diagnosis of electrical faults and related repairs.",
        price: "From Rs. 200",
      },
      {
        name: "Battery Service & Replacement",
        description: "Battery checks, servicing, and replacement.",
        price: "Labour from Rs. 200",
      },
      {
        name: "Self-Start & Kick-Start Repair",
        description: "Diagnosis of starting problems and repairs.",
        price: "From Rs. 200",
      },
      {
        name: "Headlight & Indicator Repair",
        description: "Inspection and repair of lights, indicators, and wiring.",
        price: "From Rs. 150",
      },
    ],
  },
  {
    title: "Specialized Repairs & Replacement",
    services: [
      {
        name: "Scooter CVT & Belt Service",
        description: "Inspection and servicing of scooter transmission components.",
        price: "From Rs. 300",
      },
      {
        name: "Silencer & Exhaust Repair",
        description: "Inspection and repair of exhaust components.",
        price: "From Rs. 200",
      },
      {
        name: "Spare Parts Replacement",
        description: "Replacement of worn or damaged vehicle parts.",
        price: "Labour from Rs. 150",
      },
      {
        name: "Accident Damage Repair",
        description: "Assessment and repair of accident-related damage.",
        price: "After inspection",
      },
    ],
  },
];
