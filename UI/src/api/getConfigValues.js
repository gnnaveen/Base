import delay from './delay';
const configValues={
    "Dropdowns" :[
        {
            "name":"item",
            "values":
            [
                {"key":"itemname","value":"123"}
            ]


        },
        {
            "name":"measurement",
            "values":
            [
                {"key":"measure","value":"123"}
            ]


        },
        {
            "name" : "price",
            "values":[
                [
                    {"key":"priceval", "value":""}
                ]
            ]
        }
    ]

};

class ConfigApi {
    static getAllConfig() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], configValues));
        }, delay);
      });
  }
}