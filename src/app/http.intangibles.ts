import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Table} from './table';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData() : Observable<Table[]> {
        return this.http.get('table.json').pipe(map(data=>{
            let usersList = data["Intangibles"];
            return usersList.map(function(user:any) {
                return {number: user.number, form: user.form, hashKey: user.hashKey, key: user.key, keyOne: user.keyOne, keyTwo: user.keyTwo, keyThree: user.keyThree, keyFour: user.keyFour, keyFive: user.keyFive};
              });
        }));
      }
}
