# E-LearningPlatform

### setup instruction

1. Clone the project

```
    git clone https://github.com/Patelnik248/E-LearningPlateform.git
```

2.Move into the directory

```
    cd E-LearningPlatform
```

3. Install dependency

```
    npm i
```

4. Run the server

```
    npm run dev
```

### instuction for tailwind setup

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwind css

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
    "./index.html","./src/**/*.{html,js,jsx,ts,tsx}"
```

4.Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add the following details in the plugin property of tailwind config

```
        [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding plugins and sependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

