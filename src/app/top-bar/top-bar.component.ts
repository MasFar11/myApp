import { Component, OnInit } from '@angular/core';
//import data from 'src/db.json';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  

 /* const users: User[] = require('./db.json').users;

  app: any.get('/users', (req, res) => {
    res.json(users);
  });

  app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.json(user);
  });

  app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.json(user);
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  }); */
}