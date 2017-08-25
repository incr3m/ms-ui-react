export const searchPost = (state, action) => {
    return {
        ...state,
        query:action.query,
        results: [
          {
            "title": "Gulgowski - Schneider",
            "description": "Synergistic bandwidth-monitored moratorium",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/manekenthe/128.jpg",
            "price": "$83.59"
          },
          {
            "title": "Cassin Group",
            "description": "Reactive systematic attitude",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
            "price": "$26.22"
          }
        ],
      };
}

export const selectSearchPost = (state, action) => {
    return {
        ...state,
        query: action.result.title,
        results: []
      }
}