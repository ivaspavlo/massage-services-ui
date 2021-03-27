
import { Injectable } from '@angular/core';
import { BlogService } from '@app/core/services';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBlogArticle } from '@app/interfaces';


export type CallState = LoadingState | IErrorState;

export const enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED'
}

export interface IErrorState {
  errorMsg: string;
}

export interface IBlogState {
  blogs: any;
  callState: CallState;
}

function getError(callState: CallState): LoadingState | string | null {
  if ((callState as IErrorState).errorMsg !== undefined) {
    return (callState as IErrorState).errorMsg;
  }

  return null;
}

@Injectable()
export class StoreService extends ComponentStore<IBlogState> {
  constructor(private blogService: BlogService) {
    super({
      blogs: [],
      callState: LoadingState.INIT
    });
  }
  
  // SELECTORS
  private readonly blogs$: Observable<IBlogArticle[]> = this.select(state => state.blogs);
  private readonly loading$: Observable<boolean> = this.select(
    state => state.callState === LoadingState.LOADING
  );
  private readonly error$: Observable<string> = this.select(state =>
    getError(state.callState)
  );
  
  // ViewModel for the component
  readonly vm$ = this.select(
    this.blogs$,
    this.loading$,
    this.error$,
    (cars, loading, error) => ({
      cars,
      loading,
      error
    })
  );
  
  // UPDATERS
  readonly updateError = this.updater((state: IBlogState, error: string) => {
    return {
      ...state,
      callState: { errorMsg: error }
    };
  });
  readonly setLoading = this.updater((state: IBlogState) => {
    return {
      ...state,
      callState: LoadingState.LOADING
    };
  });
  readonly setLoaded = this.updater((state: IBlogState) => {
    return {
      ...state,
      callState: LoadingState.LOADED
    };
  });
  readonly updateBlogs = this.updater((state: IBlogState, blog: IBlogArticle[]) => {
    return {
      ...state,
      error: '',
      cars: [...state.blogs, blog]
    };
  });
  
  // EFFECTS
  readonly getAllBlogs = this.effect(() => {
    this.setLoading();
    return this.blogService.getAll().pipe(
      tapResponse(
        blogs => {
          this.setLoaded();
          this.updateBlogs(blogs);
        },
        (error: any) => this.updateError(error)
      ),
      catchError(() => EMPTY)
    );
  });
}

// https://indepth.dev/posts/1408/how-to-manage-angular-state-in-your-components
