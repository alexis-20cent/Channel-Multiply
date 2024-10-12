import * as content from "@/modules/contents/domain/Content";
import { movie } from "../../../__data__/movies";

describe('content', () => {
  describe('ensureContentIsValid', () => {
    test('should throw an error with incorrect content', () => {
      let hasError = false;
      try {
        content.ensureContentIsValid({  } as never);
      } catch {
        hasError = true;
      }
      expect(hasError).toBeTruthy();
    });
    test('should do nothing with correct content', () => {
      let hasError = false;
      try {
        content.ensureContentIsValid(movie);
      } catch {
        hasError = true;
      }
      expect(hasError).toBeFalsy();
    });
  });

  describe('isContentIdValid', () => {
    test('should accept a number', () => {
      expect(content.isContentIdValid(1)).toBeTruthy();
    });
    test('should refuse something else', () => {
      expect(content.isContentIdValid('1' as never)).toBeFalsy();
      expect(content.isContentIdValid(true as never)).toBeFalsy();
      expect(content.isContentIdValid([] as never)).toBeFalsy();
      expect(content.isContentIdValid({} as never)).toBeFalsy();
    });
  });

  describe('isContentTitleValid', () => {
    test('should accept a string', () => {
      expect(content.isContentTitleValid('1')).toBeTruthy();
    });
    test('should refuse something else', () => {
      expect(content.isContentTitleValid(1 as never)).toBeFalsy();
      expect(content.isContentTitleValid(true as never)).toBeFalsy();
      expect(content.isContentTitleValid([] as never)).toBeFalsy();
      expect(content.isContentTitleValid({} as never)).toBeFalsy();
    });
  });

  describe('isContentImageValid', () => {
    test('should accept a string', () => {
      expect(content.isContentImageValid('1')).toBeTruthy();
    });
    test('should refuse something else', () => {
      expect(content.isContentImageValid(1 as never)).toBeFalsy();
      expect(content.isContentImageValid(true as never)).toBeFalsy();
      expect(content.isContentImageValid([] as never)).toBeFalsy();
      expect(content.isContentImageValid({} as never)).toBeFalsy();
    });
  });

  describe('isDescriptionValid', () => {
    test('should accept a string', () => {
      expect(content.isDescriptionValid('1')).toBeTruthy();
    });
    test('should refuse something else', () => {
      expect(content.isDescriptionValid(1 as never)).toBeFalsy();
      expect(content.isDescriptionValid(true as never)).toBeFalsy();
      expect(content.isDescriptionValid([] as never)).toBeFalsy();
      expect(content.isDescriptionValid({} as never)).toBeFalsy();
    });
  });

  describe('ContentIdNotValidError', () => {
    test('should give an Error object', () => {
      expect(content.ContentIdNotValidError(1)).toBeInstanceOf(Error);
    });
  });

  describe('ContentTitleNotValidError', () => {
    test('should give an Error object', () => {
      expect(content.ContentTitleNotValidError('1')).toBeInstanceOf(Error);
    });
  });

  describe('ContentImageNotValidError', () => {
    test('should give an Error object', () => {
      expect(content.ContentImageNotValidError('1')).toBeInstanceOf(Error);
    });
  });

  describe('ContentDescriptionNotValidError', () => {
    test('should give an Error object', () => {
      expect(content.ContentDescriptionNotValidError('1')).toBeInstanceOf(Error);
    });
  });
});
