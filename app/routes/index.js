import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      skills: [
        {type: "tech", size: "medium", value: "Spring Boot"},
        {type: "tech", size: "small", value: "Spring Data"},
        {type: "tech", size: "large", value: "Java"},
        {type: "tech", size: "small", value: "Hibernate"},
        {type: "skill", size: "large", value: "Agile"},
        {type: "tech", size: "medium", value: "Hadoop"},
        {type: "skill", size: "medium", value: "TDD"},
        {type: "tech", size: "medium", value: "Docker"},
        {type: "tech", size: "medium", value: "Ember"},
        {type: "tech", size: "small", value: "Prometheus"},
        {type: "tech", size: "small", value: "Spring Security"},
        {type: "tech", size: "small", value: "Node"},
        {type: "tech", size: "large", value: "Javascript"},
        {type: "tech", size: "small", value: "D3"},
        {type: "tech", size: "medium", value: "CSS"},
        {type: "area", size: "large", value: "Big Data"},
        {type: "tech", size: "medium", value: "Spring Data REST"},
        {type: "skill", size: "medium", value: "DevOps"},
        {type: "tech", size: "medium", value: "HTML"},
        {type: "skill", size: "medium", value: "Pair Programming"},
        {type: "tech", size: "medium", value: "SQL"},
        {type: "skill", size: "small", value: "BDD"},
        {type: "tech", size: "small", value: "Elasticsearch"},
        {type: "area", size: "medium", value: "NoSQL"},
        {type: "tech", size: "medium", value: "MongoDB"},
        {type: "tech", size: "small", value: "Neo4J"},
        {type: "area", size: "medium", value: "Microservices"},
        {type: "tech", size: "small", value: "RabbitMQ"},
        {type: "tech", size: "small", value: "Grafana"},
        {type: "area", size: "medium", value: "RESTful APIs"},
        {type: "tech", size: "small", value: "Git"},
        {type: "skill", size: "medium", value: "CI"},
        {type: "skill", size: "medium", value: "CD"},
        {type: "tech", size: "small", value: "Lucene"}
        ]
    });
  }
});
