import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { LoginService } from 'src/app/services/login.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  animal: Animal;
  provider;
  imageSrc: string;
  imageIndex: number = 0;
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private loginService: LoginService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.loginService.getAnimal(this.animalId).subscribe((res: Animal) => {
      this.animal = res;
      console.dir(this.animal);
      this.imageSrc = (this.animal.images && this.animal.images.length > 0) ? this.animal.images[0] : "";
      this.loginService.getProvider(this.animal.pid).subscribe(res => {
        this.provider = res;
        console.dir(this.provider);
        this.isLoading = false;
      })
    });
  }
  get animalId(): string {
    return this.route.snapshot.params['id'];
  }

  nextImage() {
    if (this.imageIndex < (this.animal.images.length - 1)) this.imageIndex++;
    else this.imageIndex = 0;
    this.imageSrc = (this.animal.images && this.animal.images.length > 0) ? this.animal.images[this.imageIndex] : "";
  }
  prevImage() {
    if (this.imageIndex > 0) this.imageIndex--;
    else this.imageIndex = (this.animal.images.length - 1);
    this.imageSrc = (this.animal.images && this.animal.images.length > 0) ? this.animal.images[this.imageIndex] : "";
  }
  age() {
    let bdate: Date = new Date(this.animal.dob);
    return Math.floor((Date.now() - bdate.getTime()) / 1000 / 3600 / 24 / 365);
  }
  months() {
    let bdate: Date = new Date(this.animal.dob);
    return Math.floor((((Date.now() - bdate.getTime()) / 1000 / 3600 / 24 / 365) - this.age()) * 12)
  }
  getBreeds() {
    let breedList: string[];
    if (this.animal.type === "Dog") {
      breedList = this.animal.dogBreeds;
    }
    else {
      breedList = this.animal.catBreeds;
    }
    let breedString: string = '';
    for(let breed of breedList) {
      breedString += breed + '/';
    }
    // remove the last slash
    breedString = breedString.slice(0, breedString.length - 1);

    if (breedList.length > 1) breedString += " Mix";
    return breedString;
  }
}
