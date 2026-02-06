(() => {

    // sin principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    // const newPerson = new Person('Sebastian', 'M', new Date('1998-06-06'));
    // console.log({ newPerson });

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const newUserSettings = new UserSettings(
        '/user/home',
        '/home',
        'sebastian@domain.com',
        'admin',
        'Sebastian',
        'M',
        new Date('1998-06-06')
    );

    console.log({ newUserSettings, isUserValida: newUserSettings.checkCredentials() });

})()