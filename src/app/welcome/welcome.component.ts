import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  welcomeMessageService: string
  name = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    //console.log("Get welcome Message")
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrorResponse(error)

    );

    //   response => this.handleSucessfulResponse(response))
    console.log("last line of getWelcomeMessage")
  }
  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldServiceWithPathVariable(this.name));
    console.log("Get welcome Message");
    //console.log(this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe())
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
  }

  handleErrorResponse(error) {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageService = error.error.message

  }


  handleSucessfulResponse(response) {
    this.welcomeMessageService = response.message

    //console.log(response.message);
    //console.log(response)

  }

}
