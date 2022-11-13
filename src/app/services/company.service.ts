import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'

@Injectable({
	providedIn: 'root',
})
export class CompanyService {
	baseUrl: string = environment.apiUrl + '/companies'
	constructor(private http: HttpClient) {}

	/**
	 * Http request to register a new company
	 * @returns Observable
	 */
	signUp(company: Company) {
		let obs = new Observable<null>((observer) => {
			this.http
				.post<JSONResponse<null>>(this.baseUrl, company, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to log into a company account
	 * @returns Observable
	 */
	signIn(company: Partial<Company>) {
		let obs = new Observable<Company>((observer) => {
			this.http
				.post<JSONResponse<Company>>(this.baseUrl + '/login', company, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to validate the current company session
	 * @returns Observable
	 */
	session() {
		let obs = new Observable<Company>((observer) => {
			this.http
				.get<JSONResponse<Company>>(this.baseUrl, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to get a company by ID
	 * @returns Observable
	 */
	get(id: String) {
		let obs = new Observable<Company>((observer) => {
			this.http
				.get<JSONResponse<Company>>(this.baseUrl + `/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to delete a company account
	 * @returns Observable
	 */
	delete(id: string) {
		let obs = new Observable<Company>((observer) => {
			this.http
				.delete<JSONResponse<Company>>(this.baseUrl + `/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to log into a company account
	 * @returns Observable
	 */
	update(company: Partial<Company>) {
		let obs = new Observable<Company>((observer) => {
			this.http
				.patch<JSONResponse<Company>>(this.baseUrl, company, {
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
