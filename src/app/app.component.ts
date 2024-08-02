// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-js-script';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.executeScript();
  }

  executeScript(): void {
    let result: string;

    try {
      result = this.runSpecificScript();

      if (result === 'success') {
        this.handleResult(result);
      } else {
        this.handleResult('failure');
      }
    } catch (error) {
      this.handleResult('failure');
    }
  }

  runSpecificScript(): string {
    return 'success';
  }

  handleResult(result: string): void {
    const successUrl = 'https://your-flutter-app/success';
    const failureUrl = 'https://your-flutter-app/failure';

    const url = result === 'success' ? successUrl : failureUrl;

    this.http.get(url).subscribe(response => {
      console.log('Flutter WebView updated:', response);
    });
  }
}
