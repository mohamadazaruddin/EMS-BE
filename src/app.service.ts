import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to My Beautiful Webpage!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #091641;
            color: #fff;
            padding: 10px 0;
        }

        h1 {
            margin-top: 50px;
            color: #fff;
        }

        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 0 20px;
        }

        p {
            line-height: 1.6;
            color: #555;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            margin: auto;
            background-color: #091641;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        .btn:hover {
            background-color: #555;
        }
    </style>
</head>

<body>
    <header>
        <h1>Welcome to EMS Backend !</h1>
    </header>
    <div class="container">
        <p>This is a Backend for Employee Management System. Feel free to explore and enjoy your stay!</p>
        <a href="https://ems-azure-beta.vercel.app/login" target="_blank" class="btn">Check out Frontend</a>
    </div>
</body>

</html>`;
  }
}
