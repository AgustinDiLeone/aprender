import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, CommonModule],
})
export class HomePage {
  private sppiner = inject(SpinnerService);
  // URLs base para los archivos
  url_colores = '/assets/imagen-color/';
  url_animales = '/assets/imagen-animal/';
  url_numeros = '/assets/imagen-numeros/';

  // Arreglo de colores
  colores = [
    {
      id: 'amarillo',
      es: '/assets/espanol/Amarillo.m4a',
      in: '/assets/ingles/Amarillo-ingles.m4a',
      pg: '/assets/portugues/Amarillo-portugues.m4a',
      imagen: this.url_colores + 'Amarillo.png',
    },
    {
      id: 'azul',
      es: '/assets/espanol/Azul.m4a',
      in: '/assets/ingles/Azul-ingles.m4a',
      pg: '/assets/portugues/Azul-portugues.m4a',
      imagen: this.url_colores + 'azul-color.png',
    },
    {
      id: 'marron',
      es: '/assets/espanol/Marron.m4a',
      in: '/assets/ingles/Marron-ingles.m4a',
      pg: '/assets/portugues/Marron-portugues.m4a',
      imagen: this.url_colores + 'marron-color.png',
    },
    {
      id: 'rojo',
      es: '/assets/espanol/Rojo.m4a',
      in: '/assets/ingles/Rojo-ingles.m4a',
      pg: '/assets/portugues/Rojo-portugues.m4a',
      imagen: this.url_colores + 'rojo-imagen.png',
    },
    {
      id: 'verde',
      es: '/assets/espanol/Verde.m4a',
      in: '/assets/ingles/Verde-ingles.m4a',
      pg: '/assets/portugues/Verde-portugues.m4a',
      imagen: this.url_colores + 'verde-imagen.png',
    },
    {
      id: 'violeta',
      es: '/assets/espanol/Violeta.m4a',
      in: '/assets/ingles/Violeta-ingles.m4a',
      pg: '/assets/portugues/Violeta-portugues.m4a',
      imagen: this.url_colores + 'violeta-imagen.png',
    },
  ];

  // Arreglo de animales
  animales = [
    {
      id: 'caballo',
      es: '/assets/espanol/Caballo.m4a',
      in: '/assets/ingles/Caballo-ingles.m4a',
      pg: '/assets/portugues/Caballo-portugues.m4a',
      imagen: this.url_animales + 'caballo-imagen.png',
    },
    {
      id: 'elefante',
      es: '/assets/espanol/Elefante.m4a',
      in: '/assets/ingles/Elefante-ingles.m4a',
      pg: '/assets/portugues/Elefante-portugues.m4a',
      imagen: this.url_animales + 'elefante-imagen.png',
    },
    {
      id: 'gato',
      es: '/assets/espanol/Gato.m4a',
      in: '/assets/ingles/Gato-ingles.m4a',
      pg: '/assets/portugues/Gato-portugues.m4a',
      imagen: this.url_animales + 'gato-imagen.png',
    },
    {
      id: 'leon',
      es: '/assets/espanol/Leon.m4a',
      in: '/assets/ingles/Leon-ingles.m4a',
      pg: '/assets/portugues/Leon-portugues.m4a',
      imagen: this.url_animales + 'leon-imagen.png',
    },
    {
      id: 'pato',
      es: '/assets/espanol/Pato.m4a',
      in: '/assets/ingles/Pato-ingles.m4a',
      pg: '/assets/portugues/Pato-portugues.m4a',
      imagen: this.url_animales + 'pato-imagen.png',
    },
    {
      id: 'perro',
      es: '/assets/espanol/Perro.m4a',
      in: '/assets/ingles/Perro-ingles.m4a',
      pg: '/assets/portugues/Perro-portugues.m4a',
      imagen: this.url_animales + 'perro-imagen.png',
    },
  ];

  // Arreglo de números
  numeros = [
    {
      id: 'uno',
      es: '/assets/espanol/Uno.m4a',
      in: '/assets/ingles/Uno-ingles.m4a',
      pg: '/assets/portugues/Uno-portugues.m4a',
      imagen: this.url_numeros + 'uno-imagen.png',
    },
    {
      id: 'dos',
      es: '/assets/espanol/Dos.m4a',
      in: '/assets/ingles/Dos-ingles.m4a',
      pg: '/assets/portugues/Dos-portugues.m4a',
      imagen: this.url_numeros + 'dos-imagen.png',
    },
    {
      id: 'tres',
      es: '/assets/espanol/Tres.m4a',
      in: '/assets/ingles/Tres-ingles.m4a',
      pg: '/assets/portugues/Tres-portugues.m4a',
      imagen: this.url_numeros + 'tres-imagen.png',
    },
    {
      id: 'cuatro',
      es: '/assets/espanol/Cuatro.m4a',
      in: '/assets/ingles/Cuatro-ingles.m4a',
      pg: '/assets/portugues/Cuatro-portugues.m4a',
      imagen: this.url_numeros + 'cuatro-imagen.png',
    },
    {
      id: 'cinco',
      es: '/assets/espanol/Cinco.m4a',
      in: '/assets/ingles/Cinco-ingles.m4a',
      pg: '/assets/portugues/Cinco-portugues.m4a',
      imagen: this.url_numeros + 'cinco-imagen.png',
    },
    {
      id: 'seis',
      es: '/assets/espanol/Seis.m4a',
      in: '/assets/ingles/Seis-ingles.m4a',
      pg: '/assets/portugues/Seis-portugues.m4a',
      imagen: this.url_numeros + 'seis-imagen.png',
    },
  ];

  temaActual: 'colores' | 'animales' | 'numeros' = 'colores';
  temaImagen = '/assets/botones/colores.png';
  temaSeleccionado = this.colores;
  idiomaSeleccionado: 'es' | 'in' | 'pg' = 'es';
  idiomaImagen = 'assets/botones/idioma-español.png';

  cambiarTema() {
    if (this.temaActual === 'colores') {
      this.sppiner.mostrar();
      this.temaActual = 'animales';
      this.temaImagen = '/assets/botones/animales.avif';
      this.temaSeleccionado = this.animales;
    } else if (this.temaActual === 'animales') {
      this.sppiner.mostrar();
      this.temaActual = 'numeros';
      this.temaImagen = '/assets/botones/numeros.png';
      this.temaSeleccionado = this.numeros;
    } else {
      this.sppiner.mostrar();
      this.temaActual = 'colores'; // Volver a colores
      this.temaImagen = '/assets/botones/colores.png';
      this.temaSeleccionado = this.colores;
    }
    console.log('Tema cambiado a:', this.temaActual);
  }

  reproducirSonido(item: any) {
    // Verificar el idioma seleccionado y obtener la URL correspondiente
    let sonidoUrl = '';

    if (this.idiomaSeleccionado === 'es') {
      sonidoUrl = item.es; // Accede a la propiedad 'es' para español
    } else if (this.idiomaSeleccionado === 'in') {
      sonidoUrl = item.in; // Accede a la propiedad 'in' para inglés
    } else if (this.idiomaSeleccionado === 'pg') {
      sonidoUrl = item.pg; // Accede a la propiedad 'pg' para portugués
    }

    // Reproducir el sonido si la URL no está vacía
    if (sonidoUrl) {
      const audio = new Audio(sonidoUrl);
      audio.play(); // Reproduce el sonido
    } else {
      console.error('No se encontró el sonido para el idioma seleccionado.');
    }
  }

  seleccionarIdioma() {
    if (this.idiomaSeleccionado === 'es') {
      this.sppiner.mostrar();
      this.idiomaSeleccionado = 'in';
      this.idiomaImagen = 'assets/botones/idioma-ingles.jpg';
    } else if (this.idiomaSeleccionado === 'in') {
      this.sppiner.mostrar();
      this.idiomaSeleccionado = 'pg';
      this.idiomaImagen = 'assets/botones/idioma-portugues.png';
    } else {
      this.sppiner.mostrar();
      this.idiomaSeleccionado = 'es';
      this.idiomaImagen = 'assets/botones/idioma-español.png';
    }
    console.log('Tema cambiado a:', this.temaActual);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    // Redirigir al login o cerrar sesión con Firebase/AuthService
  }
}
