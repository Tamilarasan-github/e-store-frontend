import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Apollo, ApolloBase } from 'apollo-angular/apollo';
import { HttpLink } from 'apollo-angular/http/http-link';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApolloClientService {

  private apolloClientMap: Map<string, ApolloClient<any>> = new Map();

  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    this.initializeClients();
  }

  private initializeClients() {

    const apiEndpoints: { [key: string]: string } = environment.apiEndpoints;

    Object.keys(apiEndpoints).forEach((serviceName) => {
      const uri = apiEndpoints[serviceName];
      const client = new ApolloClient({
        link: this.httpLink.create({ uri }),
        cache: new InMemoryCache(),
      });
      this.apolloClientMap.set(serviceName, client);
    });
  }

  getApolloClient(serviceName: string): ApolloClient<any> {
    const client = this.apolloClientMap.get(serviceName);
    if (!client) {
      throw new Error(`ApolloClient for service ${serviceName} not found`);
    }
    return client;
  }
}
