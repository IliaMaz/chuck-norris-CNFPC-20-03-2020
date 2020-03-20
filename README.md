# Process

0. Check the API
  you are making the good request to the good endpoint

1. Service
Create the right function inside the service
 - We need to app the httpclientModule to the app.module.ts
 - We need the load the httpclient as a private ressource

2. Component
ng g c components/page-joke

3. Create the routing in app-routing.module

  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full'
  },
  {
    path: 'joke',
    component: PageJokesComponent
  }
4. Load the data in the component TS

5. Show the data in the component HTML