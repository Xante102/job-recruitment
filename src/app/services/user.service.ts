import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { User } from '../interfaces/user.interface'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	baseUrl: string = environment.apiUrl + '/users'
	constructor(private http: HttpClient) {}

	/**
	 * Http request to register a new user
	 * @returns Observable
	 */
	signUp(user: User) {
		let obs = new Observable<null>((observer) => {
			this.http
				.post<JSONResponse<null>>(this.baseUrl, user, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to log into a user account
	 * @returns Observable
	 */
	signIn(user: Partial<User>) {
		let obs = new Observable<User>((observer) => {
			this.http
				.post<JSONResponse<User>>(this.baseUrl + '/login', user, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to validate the current user session
	 * @returns Observable
	 */
	session() {
		let obs = new Observable<User>((observer) => {
			this.http
				.get<JSONResponse<User>>(this.baseUrl, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to delete a user account
	 * @returns Observable
	 */
	delete(id: string) {
		let obs = new Observable<User>((observer) => {
			this.http
				.delete<JSONResponse<User>>(this.baseUrl + `/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to log into a user account
	 * @returns Observable
	 */
	update(user: Partial<User>) {
		let obs = new Observable<User>((observer) => {
			this.http
				.patch<JSONResponse<User>>(this.baseUrl, user, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to destroy the session
	 * @returns Observable
	 */
	logOut() {
		let obs = new Observable<null>((observer) => {
			this.http
				.get<JSONResponse<null>>('/logout', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
