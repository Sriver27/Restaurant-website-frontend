json-server --watch db.json

## This is a frontend assignment of RoxWealth

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Sriver27/Restaurant-website.git

   ```

2. Change directory to the project directory:

   ```bash
   cd Restaurant-website

   ```

3. Install the dependencies. Here **--legacy-peer-deps** is used as some dependencies have a version mismatch:

   ```bash
   npm i --legacy-peer-deps

   ```

4. In one terminal run the localhost server. This is a mock backend server to send the json to api as resource:

   ```bash
   cd src
   json-server --watch db.json

   ```

5. In another terminal run the project:

   ```bash
   cd Restaurant-website
   npm start
   ```
