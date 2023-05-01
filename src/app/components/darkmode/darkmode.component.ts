import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit{

  constructor(){



  }



  ngOnInit(): void {

    let themeToggler = document.querySelector('#theme-toggler') as HTMLElement;

    themeToggler.onclick = () =>{
        themeToggler.classList.toggle('fa-sun');
        if(themeToggler.classList.contains('fa-sun')){
            document.body.classList.add('active');
        }else{
            document.body.classList.remove('active');
        }
      }

    }

  }

