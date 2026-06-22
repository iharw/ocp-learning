# Hello I am Harw - React App

This is a simple React Hello World application deployed on OpenShift.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploy to OpenShift

```bash
oc new-app https://github.com/iharw/ocp-learning.git --name=hello
```

The application will automatically detect that it's a Node.js/React project and build accordingly.
