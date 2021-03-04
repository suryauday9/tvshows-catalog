import axios from 'axios';
import api from '../../src/services/api';
import { genres } from './response';

describe("validating API layer of TV shows app", () => {
  const apiBaseUrl = 'http://api.tvmaze.com';

  it("api to be defined", () => {
    // Mock module with Jest mock functions
    jest.mock("@/services/api");
    expect(api).toBeDefined();
  });

  it("axios.create sets the baseUrl", () => {
    jest.mock("@/services/api");
    let connect = axios.create({
      apiBaseUrl
    });
    expect(api.defaults.baseURL).toEqual(connect.defaults.apiBaseUrl);
  });

  it("axios.create test response interceptor with success scenario", () => {
    expect(api.interceptors.response.handlers[0].fulfilled({data : genres})).toBe(genres);
  });

  it("axios.create test response interceptor with error scenario", () => {
    expect(api.interceptors.response.handlers[0].rejected({
        response: {
          statusText: 'NotFound',
          status: 404,
          data: {message: 'Page not found'}
        }
      })).rejects.toMatchObject({ response : {
        statusText: 'NotFound',
        status: 404,
        data: {message: 'Page not found'}
      }})
  });
});
