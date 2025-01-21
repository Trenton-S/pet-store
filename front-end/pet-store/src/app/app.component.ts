import { Component, inject, model } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { Pet, PetStatus } from './models/pet.model';
import { PetStoreService } from './src/app/services/pet-store.service';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonToggleModule, FormsModule, MatGridListModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly petService = inject(PetStoreService);
  private readonly snackBar = inject(MatSnackBar);

  public statuses = model<PetStatus[]>(['available', 'pending', 'sold']);

  public pets = rxResource<Pet[], PetStatus[]>(
    {
      request: () => this.statuses(),
      loader: ({ request, abortSignal }) => {
        return this.petService.getPetsByStatus(request).pipe(
          catchError((err) => {
            this.snackBar.open('Failed to load pets', undefined, { duration: 3000 });
            return of([]);
          }));
        },
    }
  )



  title = 'pet-store';
}
