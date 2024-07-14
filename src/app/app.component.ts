import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { MinutesPipe } from './minutes.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MinutesPipe],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'harry-potter-movies';
  ngOnInit() {
   
  }

}
