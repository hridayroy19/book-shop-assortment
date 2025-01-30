
declare module 'sslcommerz-lts' {
    class SSLCommerzPayment {
      constructor(storeId: string, storePassword: string, isSandbox: boolean);
      init(data: any): Promise<any>;
    }
    export = SSLCommerzPayment;
  }
  
  // src/types/sslcommerz-lts.d.ts
declare module 'sslcommerz-lts' {
    const SSLCommerzPayment: any;
    export = SSLCommerzPayment;
  }
  