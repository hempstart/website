function Card({ image, alt, caption, text }) {
  return (
    <figure>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="85"
        fill="none"
        className="decoration"
      >
        <path
          fill="#B05D49"
          fillRule="evenodd"
          d="M35.6149 59.5c5.2848-8.5457 8.3637-18.7366 8.4097-29.7043C44.0705 18.828 41.0835 8.5914 35.9366 0c-5.2848 8.5457-8.3638 18.7366-8.4097 29.7043-.046 10.9677 2.8951 21.2043 8.088 29.7957zm-6.4337 7.9516c-4.0899-2.8333-9.0071-4.6156-14.3838-4.8441C9.42071 62.379 4.31974 63.6586 0 66.1263c4.08997 2.8334 9.00712 4.6156 14.3838 4.8441 5.4227.2742 10.4777-1.051 14.7974-3.5188zm27.435 3.5645C61.9929 70.7876 66.956 69.0054 71 66.172c-4.3197-2.4677-9.4207-3.793-14.7974-3.5188s-10.3398 2.0108-14.3838 4.8441c4.3197 2.4221 9.4207 3.7473 14.7974 3.5188zm-26.9295.8683c-3.1249.6855-6.1579 2.2393-8.7314 4.6613-2.6194 2.422-4.3657 5.3468-5.3307 8.4543 3.1249-.6855 6.1579-2.2393 8.7314-4.6613 2.5735-2.422 4.3657-5.3468 5.3307-8.4543zm16.8654 8.4543c2.5735 2.422 5.6524 3.9758 8.7314 4.6613-.9651-3.1075-2.7573-6.0323-5.3307-8.4543-2.5735-2.422-5.6525-3.9758-8.7314-4.6613.965 3.1075 2.7572 6.0323 5.3307 8.4543zm-16.268-18.965c-1.1029-6.6721-3.998-13.1156-8.8233-18.5081-4.8252-5.3468-10.8453-8.9113-17.27892-10.6479 1.10291 6.6721 3.99805 13.1156 8.82332 18.5081 4.8252 5.3925 10.8453 8.9113 17.2789 10.6479zm28.8136-10.6479c4.8253-5.3468 7.7204-11.7903 8.8233-18.5081-6.4336 1.6909-12.4537 5.2554-17.2789 10.6479-4.8253 5.3468-7.7204 11.7903-8.8233 18.5081 6.4336-1.7366 12.4537-5.2554 17.2789-10.6479z"
          clipRule="evenodd"
        />
      </svg>
      <div className="inner">
        <p>{text}</p>
        <a href="#contact">Contact us</a>
      </div>
      <img src={image} alt={alt} />
      <figcaption>{caption}</figcaption>
      <style jsx>{`
        figure {
          width: 100%;
          max-height: 550px;
          transition: box-shadow 300ms ease;
          cursor: pointer;
          position: relative;
          margin: 0;
        }

        figure img {
          width: 100%;
          height: 550px;
          object-fit: cover;
        }

        figcaption {
          margin-top: 20px;
          color: var(--color-primary);
        }

        figure:before {
          content: "";
          background-color: var(--color-primary);
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          opacity: 0;
          transition: opacity 200ms ease-in-out;
        }

        figure:hover {
          box-shadow: var(--offset-shadow);
        }

        figure:hover:before {
          opacity: 0.8;
        }

        figure:hover .inner {
          opacity: 1;
        }

        .decoration {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -75%);
        }

        .inner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          width: 80%;
          color: var(--background);
          transition: opacity 600ms ease-in-out;
        }

        p {
          margin-bottom: 20px;
        }

        a {
          font-weight: 800;
          text-transform: uppercase;
          color: var(--background);
          text-decoration: none;
          letter-spacing: 3px;
        }

        @media (max-height: 850px) {
          figure {
            max-height: auto;
          }
          figure img {
            height: 400px;
          }
        }
      `}</style>
    </figure>
  )
}

export default Card
